var Ballgame = (function(module) {
	'use strict';

	function TextSystem(entitySystem) {
		Jabaku.SystemBase.call(this, entitySystem, function(entity) {
			return !entity.contains(Ballgame.Invisibility) && 
				entity.contains(Ballgame.Transform) &&
				(entity.contains(Ballgame.ScreenText) || entity.contains(Ballgame.Text));
		});
	}
	TextSystem.extends(Jabaku.SystemBase, {
		_renderOne: function(engine, globalParams, text, trans) {
			text.prepare(engine);

			globalParams.uWorld = trans.global.val;

			text.setParams(globalParams);
			engine.setBlendMode(BlendMode.PREMUL_ALPHA);
			engine.setProgram(text.material.program, globalParams);

			text.render(engine);
		},
		render: function(engine, globalParams) {
			for (var i = 0; i < this._entities.length; ++i) {
				var entity = this._entities[i];

				var trans = entity.get(Ballgame.Transform);

				var text = entity.get(Ballgame.ScreenText);
				if (text !== undefined) {
					this._renderOne(engine, globalParams, text, trans);
				}

				text = entity.get(Ballgame.Text);
				if (text !== undefined) {
					this._renderOne(engine, globalParams, text, trans);
				}
			}
		}
	});

	module.TextSystem = TextSystem;
	return module;
})(Ballgame || {});
