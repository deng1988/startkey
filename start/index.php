<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="ja" class="ie6 ielt8" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if IE 7 ]>    <html lang="ja" class="ie7 ielt8" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if IE 8 ]>    <html lang="ja" class="ie8" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="ja">
<!--<![endif]-->
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>●ページタイトル●｜●カテゴリタイトル●｜●サイトタイトル●</title>
<meta name="description" content="●ディスクリプション●" />
<meta name="keywords" content="●キーワード●" />
<?php require_once($_SERVER['DOCUMENT_ROOT'].'/lib/include/meta.html'); ?>
<!--▲▲/#META ▲▲-->

<!--UNIQ SCRIPT-->

<script>
(function($,window,undefined){
	
$(document).ready(function () {
	
//var th_len = $('.top-mv-box figure').length;	
	
//-------top-mv-box---------
  $('.top-mv-box').slick({
	dots: false,
	  arrows:false,
	infinite: true,
	  slide:'div.top-mv-slider',
	  slidesToShow:1,
	  //slidesToShow:th_len,
	  slidesToScroll:1,
	  autoplay: true,
	  pauseOnHover: true,
	  fade: true,
	  speed:1000,
	 autoplaySpeed:4000
  });
  
});

})(jQuery,this);
</script>

<!--/UNIQ SCRIPT-->
</head>

<body class="contents_area top-page" id="header" >
<?php require_once($_SERVER['DOCUMENT_ROOT'].'/lib/include/header.html'); ?>
<!--▲▲/#HEADER ▲▲-->

<div id="contents" class="contents_main">








  <div class="pager-wrapper">
    <div class="pager-box">
      <p class="pager-arrow arrow-prev disable"> <a href="#">前へ</a> </p>
      <p class="pager-arrow arrow-next"><a href="#">次へ</a></p>
      <ul class="pager-ul">
      
        <li class="pager-num current"><a href="#">1</a></li>
        <li class="pager-num"><a href="#" title=" 2">2</a></li>
        <li class="pager-num"><a href="#" title=" 2">3</a></li>
        <li class="pager-num"><a href="#" title=" 2">4</a></li>
        <li class="pager-num"><a href="#" title=" 2">5</a></li>
        
        
      </ul>
    </div>
  </div>
  
  
  
</div>

<!--▲▲/#CONTENTS ▲▲-->

<?php require_once($_SERVER['DOCUMENT_ROOT'].'/lib/include/footer.html'); ?>

<!--▲▲/#FOOTER ▲▲-->

<?php require_once($_SERVER['DOCUMENT_ROOT'].'/lib/include/all.html'); ?>
<!--▲▲/#CONVERSION ▲▲-->

</body>
</html>
