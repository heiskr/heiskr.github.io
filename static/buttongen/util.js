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
		return ("#" + utility.to_hex(d.r) + utility.to_hex(d.g) + utility.to_hex(d.b)).toLowerCase();
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

	function Clone() { }
	function clone(obj) {
	    Clone.prototype = obj;
	    return new Clone();
	}