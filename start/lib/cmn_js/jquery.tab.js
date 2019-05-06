$(document).ready(function(){


	
	
		if($(".facility-index-tab-ul").length > 0){
		   
		  
		  $(".facility-index-tab-box").hide();
		  
		  $(".facility-index-tab-ul li").click(function () {
			 $(".facility-index-tab-ul li").removeClass("current");
		     $(this).addClass("current");
		     $(".facility-index-tab-box").hide();
		     $(".facility-index-tab-box").eq($(this).index()).stop().fadeIn();
		  });
		  
		   $(".facility-index-tab-ul li").eq(0).trigger("click");
		  
		  
		  var uri = location.href;
		  if(uri.match("tab=")){
		  var tab=parseInt(uri.split("tab=")[1]);
		  $(".facility-index-tab-ul li").removeClass("current");
		  $(".facility-index-tab-box").hide();
		  $(".facility-index-tab-ul li").eq(tab).addClass("current");
		  $(".facility-index-tab-box").eq(tab).fadeIn();
		  }
	
	      /*
		  /facility/index.php?tab=0
		  /facility/index.php?tab=1
		  /facility/index.php?tab=2
		  /facility/index.php?tab=3
		  */
	
	
	   }
	
	
});
