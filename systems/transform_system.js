var Ballgame = (function(module) {
	'use strict';

	function TransformSystem(entitySystem) {
		Jabaku.SystemBase.call(this, entitySystem, function(entity) {
			return entity.contains(Ballgame.Transform);
		});
	}
	TransformSystem.extends(Jabaku.SystemBase, {
		update: function() {
			for (var i = 0; i < this._entities.length; ++i) {
				var entity = this._entities[i];
				var trans = entity.get(Ballgame.Transform);
				trans.calcTransform();
			}
		}
	});

	module.TransformSystem = TransformSystem;
	return module;
})(Ballgame || {});