var Ballgame = (function(module) {
	'use strict';

	function CameraSystem(entitySystem) {
		Jabaku.SystemBase.call(this, entitySystem, function(entity) {
			return entity.contains(Ballgame.Camera) && entity.contains(Ballgame.Transform);
		});
	}
	CameraSystem.extends(Jabaku.SystemBase, {
		update: function() {
			for (var i = 0; i < this._entities.length; ++i) {
				var entity = this._entities[i];
				var camera = entity.get(Ballgame.Camera);
				var trans = entity.get(Ballgame.Transform);

				camera.pos.copy(trans.pos);
				if (camera.target) {
					camera.view.lookAt(trans.pos, camera.target, trans.up);
				} else {
					camera.view.fromRotationTranslation(trans.rot, trans.pos).invert();
				}
			}
		}
	});

	module.CameraSystem = CameraSystem;
	return module;
})(Ballgame || {});
