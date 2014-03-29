var Ballgame = (function(module) {
	'use strict';

	function PointLight(color) {
		Jabaku.PointLight.call(this, undefined, color);
	}
	PointLight.type = 'pointLight';
	PointLight.extends(Jabaku.PointLight, {
		get type() {
			return PointLight.type;
		}
	});

	module.PointLight = PointLight;
	return module;
})(Ballgame || {});