var Ballgame = (function(module) {
	'use strict';

	function Acceleration(value) {
		this.value = value ? value.clone() : new Vecmath.Vector3();
	}
	Acceleration.type = 'acceleration';
	Acceleration.extends(Object, {
		get type() {
			return Acceleration.type;
		}
	});

	module.Acceleration = Acceleration;
	return module;
})(Ballgame || {});