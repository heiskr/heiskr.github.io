/*!
 * Color animation jQuery-plugin
 * http://www.bitstorm.org/jquery/color-animation/
 * Based on code copyright 2007 John Resig
 * Copyright 2010 Edwin Martin <edwin@bitstorm.org>
 * Released under the MIT and GPL licenses.
 */

(function($) {
	var properties = ['color', 'backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'outlineColor'];
	$.each(properties, function(i, property) {
		$.fx.step[property] = function(fx) {
			if (!fx.init) {
				fx.begin = parseColor($(fx.elem).css(property));
				fx.end = parseColor(fx.end);
				fx.init = true;
			}

			fx.elem.style[property] = calculateColor(fx.begin, fx.end, fx.pos);
		}
	});

	// borderColor doesn't fit in standard fx.step above.
	$.fx.step.borderColor = function(fx) {
		if (!fx.init) {
			fx.end = parseColor(fx.end);
		}
		var borders = properties.slice(2, 6); // All four border properties
		$.each(borders, function(i, property) {
			if (!fx.init) {
				fx[property] = {begin: parseColor($(fx.elem).css(property))};
			}

			fx.elem.style[property] = calculateColor(fx[property].begin, fx.end, fx.pos);
		});
		fx.init = true;
	}

	// Calculate an in-between color. Returns "#aabbcc"-like string.
	function calculateColor(begin, end, pos) {
		return '#'
				+ get2hex(begin[0] + pos * (end[0] - begin[0]))
				+ get2hex(begin[1] + pos * (end[1] - begin[1]))
				+ get2hex(begin[2] + pos * (end[2] - begin[2]));
	}

	// Get two-digits hex number
	function get2hex(i) {
		var hex = parseInt(i).toString(16);
		return hex.length == 1 ? '0'+hex : hex;
	}

	// Parse an CSS-syntax color. Outputs an array [r, g, b]
	function parseColor(color) {
		var match, triplet;

		// Match #aabbcc
		if (match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color)) {
			triplet = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];

			// Match #abc
		} else if (match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color)) {
			triplet = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17];

			// Match rgb(n, n, n)
		} else if (match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
			triplet = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];

			// No browser returns rgb(n%, n%, n%), so little reason to support this format.
		}

		return triplet;
	}
})(jQuery);