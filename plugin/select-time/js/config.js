require.config({
	baseUrl : jsBaseUrl,
	paths : {
		cookie : 'modules/cookie',
		secret: 'modules/secret',
		user: 'modules/user',
		alertify: 'vendor/alertify',
		juicer : 'vendor/juicer',
		ajax: 'vendor/ajax',
		ajaxform: 'vendor/ajaxform',
		uri: 'uri'
	},
	shim : {
		juicer : {
			exports : 'juicer'
		}
	}
});

