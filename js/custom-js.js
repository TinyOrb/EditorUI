var windowHeight,windowWidth,headerHeight,menuBarHeight,footerHeight,contentHeight;
function assightHeightToContent(){	
	windowHeight = $(window).height();
	windowWidth = $(window).width();
	headerHeight = $('.tinyorb-header').outerHeight();
	menuBarHeight = $('.tinyorb-menu').outerHeight();
	footerHeight = $('.tinyorb-footer').outerHeight();

	contentHeight= windowHeight-(headerHeight+menuBarHeight+footerHeight);
	$('.tinyorb-tree,.tinyorb-editor').height(contentHeight-50);
	if(windowWidth>1024){
		$('.tinyorb-tree').show();
	}
	else{
		$('.tinyorb-tree').hide();
		$('.tinyorb-tree-fixed').removeClass('active');
	}
}

$(document).ready(function() {
	//assing height to inside content function
	assightHeightToContent();
	
	//call nice select for language and name dropdown
	$('.tinyorb-language,.tinyorb-show-name').niceSelect();
	
	//tree icon action
	$('.tinyorb-tree-fixed').on('click',function(){
		$('.tinyorb-tree').fadeToggle();
		$(this).toggleClass("active");
	});
});

$(window).resize(assightHeightToContent);

//after window load show content section(while assigning height avoid jurk)
$(window).on('load', function(){
   $('.tinyorb-inside').fadeIn();
})