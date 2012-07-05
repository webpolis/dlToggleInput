/**
 * dl Toggle Input
 * 
 * author: Nicolas Iglesias <nico@webpolis.com.ar>
 */
;
(function($){
 
    $.fn.extend({ 
         
        dlToggleInput: function(opts) {
            var defaults = {
                disabled: false,
                keepValue: false,
                disabledColor:'#eee',
                imgStateDisabled: '/images/icons/user.png',
                imgStateDisabledWidth: 20,
                imgStateEnable: '/images/clear.png',
                clearSelector: '.contact-add',
                onClear: function(el){
                    
                }
            };
            
            var methods = {
                isDisabled : function(){
                    return $(this).hasClass('dlToggle');
                },
                disable : function(e, opts, w){
                    $(e).removeClass('dlToggle').addClass('dlToggleEnabled').attr('readonly', false);
                    $(e).nextAll(opts.clearSelector).show().prevAll(opts.clearSelector).show();
                    $(e).nextAll('.dlToggleInputEnable,.dlToggleInputDisabledImg').remove();
                    $(e).prevAll('.dlToggleInputEnable,.dlToggleInputDisabledImg').remove();
                        
                    if(!opts.keepValue){
                        $(e).val('').attr('style','width:'+(opts.width)+'px!important;');
                        $(e).nextAll(opts.clearSelector).val('').prevAll(opts.clearSelector).val('');
                        $(e).focus();
                    }
                    $(e).css('float','left');
                },
                enable: function(e, opts, w){
                    var nw = opts.width ? opts.width : w-opts.imgStateDisabledWidth;
                    $(e).addClass('dlToggle').attr('style','width:'+(nw)+'px!important;padding-left:'
                        +opts.imgStateDisabledWidth+'px!important;border-style:inset;border-color:#fafafa;background-color:'+opts.disabledColor).attr('readonly', true);
                    $(e).nextAll(opts.clearSelector).hide().prevAll(opts.clearSelector).hide();
                    $(e).after($('<a class="dlToggleInputEnable" href="#" style="float:left;margin-top:4px"><img src="'+opts.imgStateEnable+'" /></a>'));
                    $(e).nextAll('.dlToggleInputEnable').click(function(ev){
                        methods['disable'](e, opts, w);
                        opts.onClear($(e));
                    });
                    $(e).before($('<img src="'+opts.imgStateDisabled+'" class="dlToggleInputDisabledImg" style="position:fixed;margin-top:4px;left:8px"/>'));
                    $(e).css('float','left');
                }
            }

            if ( methods[opts] ) {
                return methods[opts].apply(this, Array.prototype.slice.call(arguments, 1));
            }else{
                var opts = $.extend(defaults, opts);
                return this.each(function(i,e) {
                    var w = $(e).width();

                    if(opts.disabled==true){
                        methods['enable'](e, opts, w);
                    }else{
                        methods['disable'](e, opts, w);
                    }
                });
            }
        }
    });
     
})(jQuery);
