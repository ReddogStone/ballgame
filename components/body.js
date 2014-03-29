var Ballgame = (function(module) {
	'use strict';

	function Body(engine, mesh, blendMode) {
		this._mesh = mesh;
		this._material = new SimpleMaterial(engine);
		this._material.blendMode = blendMode || BlendMode.SOLID;
	}
	Body.type = 'body';
	Body.extends(Object, {
		get type() {
			return Body.type;
		},
		get material() {
			return this._material;
		},
		prepare: function(engine) {
		},
		setParams: function(params) {
			this._material.setParams(params);
		},
		render: function(engine) {
			this._mesh.render(engine);
		}
	});

	module.Body = Body;
	return module;
})(Ballgame || {});