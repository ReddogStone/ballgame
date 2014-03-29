var Ballgame = (function(module) {
	'use strict';

	function AccelerationSystem(entitySystem) {
		Jabaku.SystemBase.call(this, entitySystem, function(entity) {
			return entity.contains(Ballgame.Velocity) &&
				entity.contains(Ballgame.Acceleration);
		});
	}
	AccelerationSystem.extends(Jabaku.SystemBase, {
		update: function(delta) {
			for (var i = 0; i < this._entities.length; ++i) {
				var entity = this._entities[i];
				var v = entity.get(Ballgame.Velocity);
				var a = entity.get(Ballgame.Acceleration);

				v.value.add(a.value.clone().scale(delta));
			}
		}
	});

	module.AccelerationSystem = AccelerationSystem;
	return module;
})(Ballgame || {});