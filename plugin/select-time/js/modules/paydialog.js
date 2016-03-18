/**
 * Created by hudi on 2016/3/6.
 */
define(function(require, exports, module) {
    var alertify = require('alertify');
    var juicer = require('juicer');
    var tpl = [
        '<div class="payPage">',
            '<div class="payBox">',
                '<h3>请选择支付方式<span class="pay_close"></span></h3>',
                '<div class="pay_price">',
                    '<p class="fl">需付款</p>',
                    '<p class="fr"><span class="pay_total">${price}</span>元</p>',
                '</div>',
                '<div class="pay_type weixin">',
                    '<p class="fl"><span class="pay_icon"></span>微信支付<i>仅安装微信6.0.2及以上版本客户端使用</i></p>',
                    '<span class="fr select"></span>',
                '</div>',
                '<div class="pay_type alipay">',
                    '<p class="fl"><span class="pay_icon"></span>支付宝</p>',
                    '<span class="fr select"></span>',
                '</div>',
                '<a href="javascript:void(0);" id="pay">立即支付</a>',
            '</div>',
        '</div>'
    ].join('');

    var pay = {
        init:function(price){
            this.events();
            this._show(price);
        },
        events:function(){
            $("body").on('click','.pay_close',function(){
                $(".payPage").hide();
            })
        },
        _show: function(price) {
            $("body").append(juicer(tpl,{price:price}));
        },
        _pay:function(url){
            var payType;
            if($(".weixin .fr").hasClass("select")){
                payType = 'weixin';
            }else{
                payType = 'alipay';
            }
            setTimeout(function(url){
                // payType= weixin or alipay
                location.href = url + "?payType=" + payType;
            }, 1000);
        }

    };
    module.exports = pay;

});