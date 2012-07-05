dlToggleInput - jQuery Plugin
=============================

This plugin allows you to manually disable a text field or reset its contents through a nicely  
graphical interface. It also allows you to insert an icon in front of the field when it's on disabled state.  



Options:  


		disabled: 		true if you want to disable this field by default  
		keepValue: 		true if you want to keep the value when the enable/reset button is clicked  
		disabledColor:		HTML color code used as background  
		imgStateDisabled: 	URL pointing to the icon which represents the content of the field  
		imgStateDisabledWidth:	size (width) in pixels of the icon shown when field is disabled  
		imgStateEnable: 	URL pointing to image button which resets the field  
		clearSelector: 		optional, if you want to display a neighboor element on reset  
		onClear: 		optional, callback executed on reset  
 

Example:  

                $('input').dlToggleInput({  
                        disabled:true,
			imgStateDisabled: '/images/icons/user.png',  
			imgStateDisabledWidth: 20,  
			imgStateEnable: '/images/clear.png',  
                        onClear: function(el){  
                                alert('Reset!');  
                        }  
                });  
