
// jquery-opacity-rollover.js =========================================================================

$(function(){

$("#footer a").click(function(){
	window.open(this.href,'_blank');
	return false;
});

});




// global navi hi-lite =========================================================================


$(window).load(function () {
	path = location.pathname
	
	if(path.match("/plan/")){
	$("#gNav li.li01 a").addClass("current");
　　	}
	if(path.match("/spot/")){
	$("#gNav li.li02 a").addClass("current");
　　	}
if(path.match("/dress/")){
	$("#gNav li.li03 a").addClass("current");
　　	}
	if(path.match("/gallery/")){
	$("#gNav li.li04 a").addClass("current");
　　	}
if(path.match("/flow/")){
	$("#gNav li.li05 a").addClass("current");
　　	}
if(path.match("/blog/")){
	$("#gNav li.li07 a").addClass("current");
　　	}
if(path.match("/access/")){
	$("#gNav li.li08 a").addClass("current");
　　	}
})


// lMenu navi hi-lite =========================================================================

$(function(){
	var url = window.location.pathname;
	$('.categoryMenu li a[href="'+url+'"]').addClass('current');
});




// LinkArea as DivArea =========================================================================

$(function(){
   $("div.sample").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});

	
// halfArea culum margin-right off =========================================================================

$(function(){
	
	$('ul.samplelist li:nth-child(4n)').each(function(){
		$(this).css({marginRight: '0'});
	})
	
	$('ul.clm2 li:nth-child(2n)').each(function(){
		$(this).css({marginRight: '0'});
	})
	
	$('ul.clm3 li:nth-child(3n)').each(function(){
		$(this).css({marginRight: '0'});
	})
	
	$('ul.clm4 li:nth-child(4n)').each(function(){
		$(this).css({marginRight: '0'});
	})
	
	$('ul.clm5 li:nth-child(5n)').each(function(){
		$(this).css({marginRight: '0'});
	})
	
})




// autoHeightPlus =========================================================================


$(document).ready(function () {
	   getHeightPlus();
	   
     $(window).on('load resize', function () {
	    getHeightPlus();
     });
		
		
		
	  function getHeightPlus(){
	  
		var w = $(window).width();
		
		if(w > 760){	
		  $('.example').autoHeight({column:4, clear:1, height:'height', reset:'reset'});	
		  
		  $('.event-contents-ul').each(function() {
		    $(this).find('li').autoHeight({column:3, clear:1,reset:'reset'});
		  });
		  	
		}
		
		if(w < 760){	
		
		  $('.example').autoHeight({column:2, clear:1, height:'height', reset:'reset'});	
		  
		  $('.event-contents-ul').each(function() {
		    $(this).find('li').autoHeight({column:3, clear:1,reset:'reset'});
		  });		
		  $('.env-flow-box p').removeAttr('style');	
		
		}
	  
	  }
	

});



// headerを固定する=========================================================================


$(window).on('load resize scroll', function () {
	
	
	  if($(".fixZoneWrapper").length > 0){
			
	  var fixZoneWrapperElem = $(".fixZoneWrapper"),
		     h_fixZoneWrapper = fixZoneWrapperElem.find(".fixZone").outerHeight();
		
		
	   fixZoneWrapperElem.css("height", h_fixZoneWrapper + "px");	
    
	    var scTop = $(document).scrollTop(),
	    	  fixTop = fixZoneWrapperElem.offset().top;
	    if( scTop <= fixTop ){
		      fixZoneWrapperElem.removeClass("goFree");
		  }
	    if( scTop > fixTop ){		
			    fixZoneWrapperElem.addClass("goFree");
      }

  }
    
});






$(document).ready(function () {
	
// class名追加=========================================================================
      $('.basic-table01:not(.clm-auto)').each(function() {

					 var tableThis = $(this),	
					     num_table_child_max = 0 ,
					     max_tr_num = 0 ;	
					 
					 
					         tableThis.find("tr").each(function() {
												var num_table_child =  $(this).children("td,th").length;		
												if(num_table_child  > num_table_child_max ) {
													num_table_child_max = num_table_child;　//最大個数を確定
													max_tr_num = $(this).index();　　//最大個数を持ち行目を確定
												}
												
							　});		
							
					     tableThis.addClass( "clm0"+ num_table_child_max );
						 
						 tableThis.find("tr").eq(max_tr_num).children("td,th").css("width", 100/num_table_child_max + "%" );
						 
		});	 








});







