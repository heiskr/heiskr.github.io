window.B = {};
$(function() {
	B.state = 'normal';
	B.setup_events();
	B.clone_init();
	B.write_code();
	B.apply_css();
	$('form').submit(function() {
		B.change_hue_sat();
		B.write_code();
		B.apply_css();
		return false;
	});
});
B.setup_events = function() {
	$('.css-button').hover(function() {
		B.state = 'hover';
		B.apply_css();
	}, function() {
		B.state = 'normal';
		B.apply_css();
	});
	$('.css-button').mousedown(function() {
		B.state = 'active';
		B.apply_css();
	});
	$('.css-button').mouseup(function() {
		B.state = 'hover';
		B.apply_css();
	});
};
B.apply_css = function() {
	var backgroundImage;
	
	var color_class = "css-button-"+textarea_bg.substr(1);

	if(B.state === 'active') {
		$('.css-button').css(bcss[color_class+":active"]);
		backgroundImage = bcss[color_class+":active"]['background-image'];
	} else if(B.state === 'hover') {
		$('.css-button').css(bcss[color_class+":hover"]);
		backgroundImage = bcss[color_class+":hover"]['background-image'];
	} else {
		$('.css-button').css(bcss[color_class]);
		backgroundImage = bcss[color_class]['background-image'];
	}
	
	var color1 = backgroundImage.substr(16,7);
	var color2 = backgroundImage.substr(25,7);
	
	if($.browser.webkit) {
		$('.css-button').css('background-image', '-webkit-gradient(linear, 0% 0%, 0% 100%, from('+color1+'), to('+color2+'))');
	} else if ($.browser.mozilla) {
		$('.css-button').css('background-image', '-moz-linear-gradient('+color1+', '+color2+')');
	} else if ($.browser.msie) {
		$('.css-button').css('background-image', 'filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='+color1+', endColorstr='+color2+')');
	}
	
	$('textarea').css('background', textarea_bg);
}
B.clone_init = function() {
	for(var i in bcss) {
		if(i.indexOf('init') === -1) {
			delete bcss[i];
		}
	}
	
	var color_class = "css-button-"+textarea_bg.substr(1);
	bcss[color_class] = clone(bcss["css-button-init"]);
	bcss[color_class+':hover'] = clone(bcss["css-button-init:hover"]);
	bcss[color_class+':active'] = clone(bcss["css-button-init:active"]);
};

B.change_hue_sat = function() {

	var sat = parseInt($('input[name="sat"]').val(), 10);
	var hue = parseInt($('input[name="hue"]').val(), 10);
	var lgt = parseInt($('input[name="lgt"]').val(), 10);
	for (var m in replaces) {
		var color = utility.hsl_to_rgb({
			h: hue,
			s: sat,
			l: replaces[m][1] * lgt / 100
		});
		color = utility.rgb_to_hex(color);
		replaces[m][2] = color;
	}
	
	textarea_bg = replaces[2][2];
	
	B.clone_init(); 
	
	for (var i in bcss) {
		if (i.indexOf('init') === -1) {
			for (var j in bcss[i]) {
				for (var k in replaces) {
					bcss[i][j] = bcss[i][j].replace(replaces[k][0], replaces[k][2]);
				}
			}
		}
	}
	
	
};
B.write_code = function() {
	var html = '';
	for (var i in bcss) {
		if (i.indexOf('init') === -1) {
			html += '.' + i + " {\n";
			for (var j in bcss[i]) {
				if(j.indexOf('background-image') === -1) {
					html += "\t" + j + ":" + bcss[i][j] + ";\n";
				} else {
					var color1 = bcss[i][j].substr(16,7);
					var color2 = bcss[i][j].substr(25,7);
						
					html +=	'\tfilter:progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='+color1+', endColorstr='+color2+');\n';
					html +=	'\tbackground-image:-webkit-gradient(linear, 0% 0%, 0% 100%, from('+color1+'), to('+color2+'));\n';
					html +=	'\tbackground-image:-webkit-linear-gradient('+color1+', '+color2+');\n';
					html +=	'\tbackground-image:-moz-linear-gradient('+color1+', '+color2+');\n';
				}
			}
			html += "}\n";
		}
	}
	$('textarea').html(html);
};
