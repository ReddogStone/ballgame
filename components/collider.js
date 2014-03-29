var Ballgame = (function(module) {
	'use strict';

	function Collider() {
	}
	Collider.type = 'collider';
	Collider.extends(Object, {
		get type() {
			return Collider.type;
		}
	});

	module.Collider = Collider;
	return module;
})(Ballgame || {});