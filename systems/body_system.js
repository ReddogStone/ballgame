var Ballgame = (function(module) {
	'use strict';

	function BodySystem(entitySystem) {
		Jabaku.SystemBase.call(this, entitySystem, function(entity) {
			return !entity.contains(Ballgame.Invisibility) && 
				entity.contains(Ballgame.Transform) && entity.contains(Ballgame.Body);
		});
	}
	BodySystem.extends(Jabaku.SystemBase, {
		getBodiesAndTransforms: function() {
			var bodies = this._entities.map(function(entity) {
				var body = entity.get(Ballgame.Body);
				var mat = entity.get(Ballgame.Material);
				if (mat) {
					body.material.color = mat.color;
				}
				return body;
			});
			var transforms = this._entities.map(function(entity) {
				return entity.get(Ballgame.Transform);
			});

			return {
				bodies: bodies,
				transforms: transforms
			};
		}
	});

	module.BodySystem = BodySystem;
	return module;
})(Ballgame || {});
