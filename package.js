Package.describe({
	summary: ""
});

Package.on_use(function (api) {

    api.use('jquery');

	api.add_files([
        'lib/jqwidgets/styles/images/icon-left.png',
        'lib/jqwidgets/styles/images/icon-right.png',
        'lib/jqwidgets/styles/images/icon-up.png',
        'lib/jqwidgets/styles/images/icon-down.png',
        'lib/jqwidgets/styles/images/sortasc.png',
        'lib/jqwidgets/styles/images/sortdesc.png',
        'lib/jqwidgets/styles/images/sortremove.png',
        'lib/jqwidgets/styles/images/loader.gif',
        'lib/jqwidgets/styles/images/close.png',
        'lib/jqwidgets/styles/images/menubutton.png',

   /*     'lib/jqwidgets/styles/images/metro-icon-left.png',
        'lib/jqwidgets/styles/images/metro-icon-right.png',
        'lib/jqwidgets/styles/images/metro-icon-up.png',
        'lib/jqwidgets/styles/images/metro-icon-down.png',
        'lib/jqwidgets/styles/images/metro-icon-down-white.png',*/


		'lib/jqwidgets/styles/jqx.base.css',
		'lib/jqwidgets/styles/jqx.arctic.css',
		'lib/jqwidgets/jqx-all.js'

		], 'client');
});