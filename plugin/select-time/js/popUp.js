define(function (require,exports,module) {
	/**
	 * author sam li
	 * creat in 2016 3 11
	 * [PopUp description]
	 * description 传入class/有默认值可以自定义
	 * @param {
	 *      showBtn   显示窗口
	 *      popShadow 弹窗层
	 *      popWin  弹窗操作窗口
	 *      closeBtn  关闭按钮
	 * } options [description]
	 */
	function PopUp(options) {
		var options = options || {},
			btn = options.showBtn || '.btn',
			popShadow = options.popShadow || '.popup_shadow',
			popWin = options.popWin || '.popup',
			closeBtn = options.closeBtn || '.close';
		this.$showBtn = $(btn);
		this.$popShadow = $(popShadow);
		this.$popWin = $(popWin);
		this.$closeBtn = $(closeBtn);
		this.init();
	}

	PopUp.prototype = {
		constructor : PopUp , 
		init : function () {
			this.$popShadow.hide();
			this.openPop();
			this.closePop();
		},
		openPop : function () {
			var self = this;
			this.$showBtn.click(function () {
				self.$popShadow.show();
				self.MarkOriginHeight = self.$popWin.height();
				self.$popWin.height(0);
				self.$popWin.animate({
					height : self.MarkOriginHeight
				});
			});
		},
		closePop : function () {
			var self = this;
			function fadeOut() {
				self.$popWin.animate({
					height : 0
				},function () {
					self.$popWin.height(self.MarkOriginHeight);
					self.$popShadow.hide();
				});
			}
			this.$closeBtn.click(fadeOut);
			this.$popShadow.bind('touchstart',fadeOut);
			this.$popWin.bind('touchstart',function (event) {
				event.stopPropagation(); 
			})
		}
	}
	return PopUp;
});