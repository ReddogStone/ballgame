var Ballgame = (function(module) {
	'use strict';

	function VelocitySystem(entitySystem) {
		Jabaku.SystemBase.call(this, entitySystem, function(entity) {
			return entity.contains(Ballgame.Transform) &&
				entity.contains(Ballgame.Velocity);
		});
	}
	VelocitySystem.extends(Jabaku.SystemBase, {
		update: function(delta) {
			for (var i = 0; i < this._entities.length; ++i) {
				var entity = this._entities[i];
				var trans = entity.get(Ballgame.Transform);
				var vel = entity.get(Ballgame.Velocity);

				trans.pos.add(vel.value.clone().scale(delta));
			}
		}
	});

	module.VelocitySystem = VelocitySystem;
	return module;
})(Ballgame || {});