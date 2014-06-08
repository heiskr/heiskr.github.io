$(document).ready(function() {
    colortool.init();
});
window.colortool = {
    $c: '',
    //current canvas element
    init: function() {
        colortool.$c = $('#1');
        colortool.click_canvas_to_set_current();
        colortool.parse_hash();
        $(":range").rangeinput();
        colortool.change_input_to_update_colors();
        colortool.type_on_text_to_update_colors();
        colortool.update_display(colortool.$c.data('color'));
        $('header, footer').delay(500).show(500, function() {
            colortool.$c.addClass('current-color');
        });
    },
    click_canvas_to_set_current: function() {
        $('canvas').click(function() {
            $('canvas').removeClass('current-color');
            colortool.$c = $(this).addClass('current-color');
            colortool.update_display(colortool.$c.data('color'));
        });
    },
    change_input_to_update_colors: function() {
        $('input').change(colortool.update_color);
        $(':range').change(colortool.update_color);
    },
    type_on_text_to_update_colors: function() {
        $('input[type="text"]').keypress(function(e) {
            if (e.keyCode === 13) {
                var name = $(this).attr('name');
                var d = colortool.$c.data('color');
                var rgb;
                if (name === 'hsl') {
                    var hsl = $(this).val().split(',');
                    d.h = parseInt(hsl[0], 10);
                    d.s = parseInt(hsl[1], 10);
                    d.l = parseInt(hsl[2], 10);
                    colortool.$c.data('color', d);
                    $(this).trigger('change');
                } else {
                    if (name === 'rgb') {
                        rgb = $(this).val().split(',');
                    }
                    else {
                        //name=='hex'
                        rgb = utility.hex_to_rgb($(this).val());
                    }
                    d.r = parseInt(rgb[0], 10);
                    d.g = parseInt(rgb[1], 10);
                    d.b = parseInt(rgb[2], 10);
                    colortool.$c.data('color', d);
                    $(this).trigger('change');
                }
            }
        });
    },
    parse_hash: function() {
        var kv = location.hash.substring(1).split('&');
        for (var i in kv) {
            kv[i] = kv[i].split('=')[1];
        }
        $('canvas').each(function() {
            var id = $(this).attr('id');
            if (kv[id - 1] !== undefined) {
                var d = [];
                d.hex = '#' + kv[id - 1];
                var rgb = utility.hex_to_rgb(kv[id - 1]);
                d.r = rgb[0];
                d.g = rgb[1];
                d.b = rgb[2];
                d = utility.rgb_to_hsl(d);
                $(this).animate({
                    'backgroundColor': d.hex
                }, 500);
                $(this).data('color', d);
            } else {
                $(this).data('color', {
                    h: 0,
                    s: 0,
                    l: 50,
                    r: 127,
                    g: 127,
                    b: 127,
                    hex: '#7F7F7F'
                });
            }
        });
    },
    update_color: function() {
        var d = colortool.$c.data('color');
        var ch = $(this).attr('name');
        if (ch === 'h' || ch === 's' || ch === 'l' || ch === 'r' || ch === 'g' || ch === 'b') {
            d[ch] = $(this).val();
        }
        if (ch === 'h' || ch === 's' || ch === 'l' || ch === 'hsl') {
            d = utility.hsl_to_rgb(d);
        }
        else {
            d = utility.rgb_to_hsl(d);
        }
        d.hex = utility.rgb_to_hex(d);
        colortool.update_display(d);
        colortool.$c.data('color', d);
        colortool.$c.animate({
            'backgroundColor': d.hex
        }, 200);
        colortool.update_hash();
    },
    update_display: function(d) {
        $(':range').each(function() {
            var value = d[$(this).attr('name')];
            $(this).val(value);
            $(this).data('rangeinput').setValue(value);
        });
        $('input[name="hsl"]').val([d.h, d.s, d.l].join(','));
        $('input[name="rgb"]').val([d.r, d.g, d.b].join(','));
        $('input[name="hex"]').val(d.hex);
    },
    update_hash: function() {
        var hs = '';
        $('canvas').each(function() {
            var hx = $(this).data('color').hex.substring(1);
            var nm = $(this).attr('id');
            hs += (nm + '=' + hx + '&');
        });
        location.hash = hs.substring(0, hs.length - 1);
    }
};
window.utility = {
    //from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    hsl_to_rgb: function(d) {
        function h2rgb(p, q, t) {
            while (t < 0) {
                t++;
            }
            while (t > 1) {
                t--;
            }
            if (t < 1 / 6) {
                return p + (q - p) * 6 * t;
            }
            else if (t < 0.5) {
                return q;
            }
            else if (t < 2 / 3) {
                return p + (q - p) * (2 / 3 - t) * 6;
            }
            else {
                return p;
            }
        }
        var h = d.h / 360,
            s = d.s / 100,
            l = d.l / 100;
        if (s === 0) {
            d.r = d.g = d.b = parseInt(l * 255, 10);
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            d.r = parseInt(h2rgb(p, q, h + 1 / 3) * 255, 10);
            d.g = parseInt(h2rgb(p, q, h) * 255, 10);
            d.b = parseInt(h2rgb(p, q, h - 1 / 3) * 255, 10);
        }
        return d;
    },
    rgb_to_hsl: function(data) {
        var r = data.r / 255,
            g = data.g / 255,
            b = data.b / 255;
        var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
        }
        data.h = parseInt(h * 360, 10);
        data.s = parseInt(s * 100, 10);
        data.l = parseInt(l * 100, 10);
        return data;
    },
    //from http://www.javascripter.net/faq/utility.rgb_to_hex.htm
    rgb_to_hex: function(d) {
        return "#" + utility.to_hex(d.r) + utility.to_hex(d.g) + utility.to_hex(d.b);
    },
    to_hex: function(N) {
        if (N === null) {
            return "00";
        }
        N = parseInt(N, 10);
        if (N === 0 || isNaN(N)) {
            return "00";
        }
        N = Math.max(0, N);
        N = Math.min(N, 255);
        N = Math.round(N);
        return "0123456789ABCDEF".charAt((N - N % 16) / 16) + "0123456789ABCDEF".charAt(N % 16);
    },
    //from http://www.javascripter.net/faq/hex_to_rgb.htm
    hex_to_rgb: function(h) {
        function cutHex(h) {
            return (h.charAt(0) === "#") ? h.substring(1, 7) : h;
        }
        h = cutHex(h);
        return [
        parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)];
    }
};