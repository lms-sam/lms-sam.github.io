define(function(require) {
	require('./vendor/UIPickerView.js');
	function td(n) {
		return n >= 10 ? '' + n : '0'+n ;
	}
	function TimeSelect(options) {
		var options = options || {};

		this.$el = $(options.$el);
		this.con = options.content;
		this.selectYears = $('#'+options.selectBtnId);
		this.closeBtn = $('#'+options.coloseBtnId);

		this.event = options.event || 'click';

		this.result = {};
		this.init();
	}
	TimeSelect.prototype = {
		construct : TimeSelect,
		init : function () {
			this.animaed = CAAnimation.createAnimation({id:'region-picker'});
			this.setCurrentTime();
			this.chooseResult();
			this.render();
		},
		setCurrentTime : function () {
			var date = new Date() , Y , M , D , h , m , r ;
			Y = date.getFullYear();
			M = date.getMonth()+1;
			D = date.getDate()+1;
			h = date.getHours();
			m = date.getMinutes();
			r = Y+'-'+M+'-'+D+' '+td(8)+':'+td(0);
			this.result = {
				Y : Y ,
				M : M ,
				D : D ,
				h : 8 ,
				m : 0
			}
			this.$el.html(r);
		},
		createYMD : function () {
			var YNDcon = this.con[0],
				self = this;
			var up_Y,up_M,up_D;
			var NowDate = new Date();
			var N_y = NowDate.getFullYear();
			var N_d = NowDate.getDate();
			var N_m = NowDate.getMonth()+1;
			var YearDate = [],nowMonthDate = [],MonthDate = [],DayDate = null;
			// 设置年范围
			for (var i = N_y; i < N_y+5; i++) {
				YearDate.push({
					'key': i ,
					'value' : i
				})
			}
			// 设置12个月范围
			for (var i = 1; i < 13; i++) {
				MonthDate.push({
					'key': i ,
					'value' : i
				})
			}
			// 设置今天剩余多少月的范围
			for (var i = N_m; i < 13; i++) {
				nowMonthDate.push({
					'key': i ,
					'value' : i
				})
			}
			function createDayData(y,m,i) {
				var s;
				if( y == N_y&& m == N_m){
					s = N_d;
				}else{
					s = 1;
				}
				var a = [];
				i = i + 1 ;
				for (var j = s; j < i; j++) {
					a.push({
						'key' : j ,
						'value' : j
					});
				}
				return a ;
			}
			function getDayCount(y,m) {
				var d = new Date();
				d.setFullYear(y,m,0);
				var result = d.getDate();
				DayDate  = createDayData(y,m,result);
				return DayDate;
			}
			function createDay(ny,nd) {
				var DayPicker = document.querySelector('#'+YNDcon[2]);
				DayPicker.innerHTML = '';
				up_D = UIPickerView.createPickerView({
					dataSource:getDayCount(ny,nd),
					id:YNDcon[2],
					constraintsId:'wower2',
					kUP:{
						kUPCELLHEIGHT:26,
						kUPFRICTION:0.003
					},
					valueChange:function(data){
						self.result.D = data.value;
					}
				});
			}
			up_Y = UIPickerView.createPickerView({
				dataSource:YearDate,
				id:YNDcon[0],
				constraintsId:'wower',
				kUP:{
					kUPCELLHEIGHT:26,
					kUPFRICTION:0.003
				},
				valueChange:function(data){
					self.result.Y = data.value;
					createMonth(self.result.Y);
					createDay(self.result.Y,N_m);
				}
			});
			function createMonth(y) {
				var data;
				if(y == N_y){
					data = nowMonthDate;
				}else{
					data = MonthDate;
				}
				up_M = UIPickerView.createPickerView({
					dataSource:data,
					id:YNDcon[1],
					constraintsId:'wower1',
					kUP:{
						kUPCELLHEIGHT:26,
						kUPFRICTION:0.003
					},
					valueChange:function(data){
						self.result.M = data.value;
						createDay(self.result.Y,N_m);
					}
				});
			}
			createMonth(N_y);
			createDay(N_y,N_m);
			var $dayCon = $('#wower2contains');
			$dayCon.css({
				transform :  'translate3d(0px, '+-$dayCon.find('li').height()+'px, 0px)'
			});

		},
		createHm : function () {
			var Hmcon = this.con[1],
				self = this;
			var up_h,up_m;
			var NowDate = new Date();
			var HoursDate = [],MinutesDate = [];
			for (var i = 8; i < 25; i++) {
				HoursDate.push({
					'key' : i,
					'value' : i
				});
			}
			for (var i = 0; i < 60; i++) {
				MinutesDate.push({
					'key' : i,
					'value' : i
				});
			}
			console.log(Hmcon[0]);
			up_h = UIPickerView.createPickerView({
				dataSource:HoursDate,
				id:Hmcon[0],
				constraintsId:'wower3',
				kUP:{
					kUPCELLHEIGHT:26,
					kUPFRICTION:0.003
				},
				valueChange:function(data){
					self.result.h = data.value;
				}
			});
			up_m = UIPickerView.createPickerView({
				dataSource:MinutesDate,
				id:Hmcon[1],
				constraintsId:'wower4',
				kUP:{
					kUPCELLHEIGHT:26,
					kUPFRICTION:0.003
				},
				valueChange:function(data){
					self.result.m = data.value;
				}
			});
		},
		chooseResult : function () {
			var self = this;
			var selectCount = false;
			this.selectYears.click(function () {
				if(selectCount){
					console.log(self.result);
					self.animaed.finish();
					setTimeout(function () {
						$('#MinutesPicker').hide();
						$('#HoursPicker').hide();
						$('#YearPicker').show();
						$('#MonthPicker').show();
						$('.sec3').show();
					},1000);
				}else{
					console.log(self.result);
					selectCount = true;
					$('#MinutesPicker').show();
					$('#HoursPicker').show();
					$('#YearPicker').hide();
					$('#MonthPicker').hide();
					$('.sec3').hide();
					self.createHm();
				}
			});
			this.closeBtn.click(function () {
				self.animaed.finish();
				setTimeout(function () {
					$('#MinutesPicker').hide();
					$('#HoursPicker').hide();
					$('#YearPicker').show();
					$('#MonthPicker').show();
					$('.sec3').show();
				},300);
			});
		},
		render : function () {
			var self = this;
			var bCreat = false;
			this.$el.bind(this.event,function () {
				if(!bCreat){
					bCreat = true;
					self.createHm();
					self.createYMD();
				}
				self.animaed.start();
			});
		}

	}
	return TimeSelect;
});