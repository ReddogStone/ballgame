var Ballgame = (function(module) {
	'use strict';

	function collideAxis(pos, scale, vel, axis, min, max) {
		var p = pos[axis];
		var s = scale[axis];
		var v = vel.value[axis];

		if ( (((p - s) < min) && (v < 0)) || (((p + s) > max) && (v > 0)) ) {
			vel.value[axis] = -vel.value[axis];
		}
	}

	function CollisionSystem(entitySystem, width, height, depth) {
		Jabaku.SystemBase.call(this, entitySystem, function(entity) {
			return entity.contains(Ballgame.Transform) &&
				entity.contains(Ballgame.Velocity) &&
				entity.contains(Ballgame.Collider);
		});

		this._width = width;
		this._height = height;
		this._depth = depth;
	}
	CollisionSystem.extends(Jabaku.SystemBase, {
		update: function() {
			for (var i = 0; i < this._entities.length; ++i) {
				var entity = this._entities[i];
				var trans = entity.get(Ballgame.Transform);
				var vel = entity.get(Ballgame.Velocity);

				var scale = trans.scale;
				var pos = trans.pos;

				var minX = -this._width * 0.5;
				var maxX = this._width * 0.5;
				var minY = -this._height * 0.5;
				var maxY = this._height * 0.5;
				var minZ = -this._depth * 0.5;
				var maxZ = this._depth * 0.5;

				collideAxis(pos, scale, vel, 'x', minX, maxX);
				collideAxis(pos, scale, vel, 'y', minY, maxY);
				collideAxis(pos, scale, vel, 'z', minZ, maxZ);
			}
		}
	});

	module.CollisionSystem = CollisionSystem;
	return module;
})(Ballgame || {});