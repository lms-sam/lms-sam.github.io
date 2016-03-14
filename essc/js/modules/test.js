define(function(require) {

	var juicer = require('juicer');

	var Model = Backbone.Model.extend({
		defaults : {
			currentCity : '',
			currentCountry : '',
			currentProvince : ''
		},
		url : 'http://trade.yinyuetai.com/get-area?callback=?'
	});

	var View = Backbone.View.extend({
		template : [
			'{@each items as item}',
			'{@if current == item.name}',
			'<option selected="selected">${item.name}</option>',
			'{@else}',
			'<option>${item.name}</option>',
			'{@/if}',
			'{@/each}'
		].join(''),
		initialize : function(model, $province, $city, $country) {
			this.model = model;
			this.$city = $city;
			this.$country = $country;
			this.$province = $province;

			this.listenTo(this.model, 'change:currentProvince', this.renderCity);
			this.listenTo(this.model, 'change:currentCity', this.renderCountry);

			this.renderProvince();
			this.bindSelectChangeEvent();
			this.initData();
		},
		initData : function() {
			if (this.$province.data('value') && this.$city.data('value') && this.$country.data('value')) {
				this.model.set('currentCity', this.$city.data('value'), {silent : true});
				this.model.set('currentCountry', this.$country.data('value'), {silent : true});
				this.model.set('currentProvince', this.$province.data('value'), {silent : true});
				this.$city.data('value', '');
				this.$country.data('value', '');
				this.$province.data('value', '');

				this.getData(this.$province, 'province', 'currentProvince').then(function() {
					this.getData(this.$city, 'city', 'currentCity',
							this.getID('province', this.model.get('currentProvince'))).then(function() {
								this.getData(this.$country, 'country', 'currentCountry', this.getID('city', this.model.get('currentCity')));
							}.bind(this));
				}.bind(this));
			}
		},
		bindSelectChangeEvent : function() {
			this.$province.on('change', function(e) {
				this.model.set('currentProvince', $(e.currentTarget).val());
			}.bind(this));

			this.$city.on('change', function(e) {
				this.model.set('currentCity', $(e.currentTarget).val());
			}.bind(this));

			this.$country.on('change', function(e) {
				this.model.set('currentCountry', $(e.currentTarget).val());
			}.bind(this));
		},
		renderProvince : function() {
			this.model.set('currentProvince', '请选择');
			this.getData(this.$province, 'province', 'currentProvince');
		},
		renderCity : function(model, val) {
			this.model.set('currentCity', '请选择');
			this.getData(this.$city, 'city', 'currentCity', this.getID('province', val));
		},
		renderCountry : function(model, val) {
			this.model.set('currentCountry', '请选择');
			this.getData(this.$country, 'country', 'currentCountry', this.getID('city', val)).then(function() {
				this.initData();
			}.bind(this));
		},
		getData : function(element, key, currentKey, id) {
			var obj, model, normal;

			obj = {};
			model = this.model;
			normal = [{
				id : 0,
				name : '请选择'
			}];

			if (id) {
				obj = {
					areaId : id
				};
			} else if (id === 0) {
				model.set(key, normal);
				this.generateSelectElement(element, currentKey, normal);
				return $.Deferred().resolve();
			}

			return $.getJSON(model.url, obj, function(result) {
				result.areas.unshift({
					id : 0,
					name : '请选择'
				});

				model.set(key, result.areas);
				this.generateSelectElement(element, currentKey, result.areas);
			}.bind(this));
		},
		getID : function(key, val) {
			if (val === '请选择') {
				return 0;
			}

			return _.filter(this.model.get(key), function(item) {
				return item.name === val;
			})[0].id;
		},
		generateSelectElement : function(element, currentKey, areas) {
			element.html(juicer(this.template, {
				items : areas,
				current : this.model.get(currentKey)
			}));
		}
	});

	var AddressSelect = Backbone.View.extend({
		initialize : function($province, $city, $country) {
			this.model = new Model();
			new View(this.model, $province, $city, $country);
		},
		getProvince : function() {
			return this.model.get('currentProvince');
		},
		getCity : function() {
			return this.model.get('currentCity');
		},
		getCountry : function() {
			return this.model.get('currentCountry');
		}
	});

	return AddressSelect;

	//window.address = new AddressSelect($('#province'), $('#city'), $('#country'));
});