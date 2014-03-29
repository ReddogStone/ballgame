var Ballgame = (function(module) {
	'use strict';

	function Velocity(value) {
		this.value = value ? value.clone() : new Vecmath.Vector3();
	}
	Velocity.type = 'velocity';
	Velocity.extends(Object, {
		get type() {
			return Velocity.type;
		}
	});

	module.Velocity = Velocity;
	return module;
})(Ballgame || {});