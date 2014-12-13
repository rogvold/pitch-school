/*********************
//* jQuery Multi Level CSS Menu #2- By Dynamic Drive: http://www.dynamicdrive.com/
//* Created: Nov 2nd, 08'
//* Menu avaiable at DD CSS Library: http://www.dynamicdrive.com/style/
*********************/

var jqueryslidemenu={

animateduration: {over: 200, out: 100}, //duration of slide in/ out animation, in milliseconds

buildmenu:function(menuid){
	jQuery(document).ready(function($){
		var $mainmenu=$('#' + menuid)
		var $headers=$mainmenu.find("ul").parent()
		show_sub = function(e) {
			$(e).children('a').addClass('hovered')
			var $targetul=$(e).children("ul:eq(0)")
			e._offsets={left:$(e).offset().left, top:$(e).offset().top}
			var menuleft=e.istopheader ? 0 : e._dimensions.w
			menuleft=(e._offsets.left+menuleft+e._dimensions.subulw>$(window).width())? (e.istopheader? - e._dimensions.subulw + e._dimensions.w : -e._dimensions.w) : menuleft
			$targetul.css({left:menuleft+"px", width:e._dimensions.subulw+'px'}).slideDown(jqueryslidemenu.animateduration.over)
		}
		hide_sub = function(e){
			clearTimeout(e._timer)
			var $targetul=$(e).children("ul:eq(0)")
			$targetul.slideUp(jqueryslidemenu.animateduration.out, function($e) { $(e).children('a').removeClass('hovered') } )
		}
		$headers.each(function(i){
			var $curobj=$(this)
			var $subul=$(this).find('ul:eq(0)')
			this._dimensions={w:this.offsetWidth, h:this.offsetHeight, subulw:$subul.outerWidth(), subulh:$subul.outerHeight()}
			this.istopheader=$curobj.parents("ul").length==1? true : false
			$subul.css({top:this.istopheader? this._dimensions.h+"px" : 0})
			$curobj.hover(
				function($curobj){
					that = this
					this._timer = setTimeout("show_sub(that)", 300)
				},
				function(){
					hide_sub(this)
				}
			) //end hover
		}) //end $headers.each()
		$mainmenu.find("ul").css({display:'none', visibility:'visible'})
	}) //end document.ready
}
}

//build menu with ID="myslidemenu" on page:
jqueryslidemenu.buildmenu("top-menu")
