'use strict';
define(['backbone'], function (Backbone) {
	return Backbone.Model.extend({
		defaults: {
			title: 'no title',
			description: ''
		}
	});
});