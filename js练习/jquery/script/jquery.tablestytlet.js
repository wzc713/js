; (function ($) {

    //注册函数
    $.fn.extend({
        settablestyle:function () {
            $('tr', this).mouseover(function () {
                $(this).css('backgroundColor', 'yellow').siblings().css('backgroundColor', '');
            });
        },
        cleartablestyle:function () {
            $('tr', this).unbind().removeAttr('style');//移除所有时间，并初始化
        }

    });
})(jQuery);