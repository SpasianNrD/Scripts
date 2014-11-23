var w = window.innerWidth;
var h = window.innerHeight;
var haw = w / 2;
var picmdir;
var img1;
var img2;
var pic1;
var pic2;
var pic3;
var pic4;
var pic5;
var pic6;
var mainsh = (h - 80)
var sidepicsh = (h - 120) / 5

document.write("<div id='projimg'></div>");
$("div#projimg").append("<div id='mainimg'></div>");    /*Putting in the containers for the pictures*/
$("div#projimg").append("<div id='pic2'></div>");
$("div#projimg").append("<div id='pic3'></div>");
$("div#projimg").append("<div id='pic4'></div>");
$("div#projimg").append("<div id='pic5'></div>");
$("div#projimg").append("<div id='pic6'></div>");

$(window).load(function(){
	console.log("Your running jQuery Version " + $.fn.jquery);   /*To see if functions used are usable*/
	var timeoutID ;
	
	$(".floatingv").click(function(){   /*For Floating Village*/
		pic1 = "http://cubicbuilds.com/upload/FloatingVillage.jpg";
		pic2 = "http://cubicbuilds.com/upload/FloatingVillage2.jpg";
		pic3 = "http://cubicbuilds.com/upload/FloatingVillage3.jpg";  /*Setting the path for each image*/
		pic4 = "http://cubicbuilds.com/upload/FloatingVillage4.jpg";
		pic5 = "http://cubicbuilds.com/upload/FloatingVillage5.jpg";
		pic6 = "http://cubicbuilds.com/upload/FloatingVillage6.jpg";
		picmdir = pic1; 
		
	});
	
	$(".treev").click(function(){   /*For Tree Village*/
		pic1 = "http://cubicbuilds.com/upload/TreeVillage.jpg";
		pic2 = "http://cubicbuilds.com/upload/TreeVillage2.jpg";
		pic3 = "http://cubicbuilds.com/upload/TreeVillage3.jpg";
		pic4 = "http://cubicbuilds.com/upload/TreeVillage4.jpg";
		pic5 = "http://cubicbuilds.com/upload/TreeVillage5.jpg";
		pic6 = "http://cubicbuilds.com/upload/holder.jpg";
		picmdir = pic1; 
		
	});
	
	$(".cutev").click(function(){   /*For Cute Village*/
		pic1 = "http://cubicbuilds.com/upload/CuteVillage.jpg";
		pic2 = "http://cubicbuilds.com/upload/CuteVillage2.jpg";
		pic3 = "http://cubicbuilds.com/upload/CuteVillage3.jpg";
		pic4 = "http://cubicbuilds.com/upload/CuteVillage4.jpg";
		pic5 = "http://cubicbuilds.com/upload/CuteVillage5.jpg";
		pic6 = "http://cubicbuilds.com/upload/holder.jpg";
		picmdir = pic1; 
		
	});
	
	$(".hubb").click(function(){   /*For HUB*/
		pic1 = "http://cubicbuilds.com/upload/Hub.jpg";
		pic2 = "http://cubicbuilds.com/upload/Hub2.jpg";
		pic3 = "http://cubicbuilds.com/upload/Hub3.jpg";
		pic4 = "http://cubicbuilds.com/upload/Hub4.jpg";
		pic5 = "http://cubicbuilds.com/upload/Hub5.jpg";
		pic6 = "http://cubicbuilds.com/upload/Hub6.jpg";
		picmdir = pic1; 
		
	});
	
	
	$("a#projectlink").click(function() {   /*Show function for project pictures.*/
		$("div#mainimg").html("<img class='picm' id='' src='" + picmdir + "'> </img>");
		$("div#pic2").html("<img class='pic2' id='projimg' src='" + pic2 + "'> </img>");  /*Inserting the Images*/
		$("div#pic3").html("<img class='pic3' id='projimg' src='" + pic3 + "'> </img>");
		$("div#pic4").html("<img class='pic4' id='projimg' src='" + pic4 + "'> </img>");
		$("div#pic5").html("<img class='pic5' id='projimg' src='" + pic5 + "'> </img>");
		$("div#pic6").html("<img class='pic6' id='projimg' src='" + pic6 + "'> </img>");
		
		$(".projinfo.right").animate({
			right: 0,
		});
		$(".projinfo.left").animate({
			left: 0,
		});
		$("img.xbutt").animate({
			left: 0,
		});
		$("img.picm").delay(500).animate({
			opacity: 1,
		}, 500);
		$("img#projimg").animate({
			right: 20,
		});
		
		$("div#pic2").click(function(){   /*Pic 1 and Pic 2*/
			img1 = $('img.picm').attr("src");
			img2 = $('img.pic2').attr("src");
			
			
			$("img.pic2").animate({opacity: 0,});
			$("img.picm").animate({opacity: 0,});
			timeoutID = setTimeout(function(){
				$("img.pic2").attr("src",img1);
				$("img.picm").attr("src",img2);
			}, 500);
			$("img.pic2").animate({opacity: 1,});
			$("img.picm").animate({opacity: 1,});
		});
		$("div#pic3").click(function(){   /*Pic 1 and Pic 3*/
			img1 = $('img.picm').attr("src");
			img2 = $('img.pic3').attr("src");
			
			$("img.pic3").animate({opacity: 0,});
			$("img.picm").animate({opacity: 0,});
			timeoutID = setTimeout(function(){
				$("img.pic3").attr("src",img1);
				$("img.picm").attr("src",img2);
			}, 500);
			$("img.pic3").animate({opacity: 1,});
			$("img.picm").animate({opacity: 1,});
		});
		$("div#pic4").click(function(){  /*Pic 1 and Pic 4*/
			img1 = $('img.picm').attr("src");
			img2 = $('img.pic4').attr("src");

			$("img.pic4").animate({opacity: 0,});
			$("img.picm").animate({opacity: 0,});
			timeoutID = setTimeout(function(){
				$("img.pic4").attr("src",img1);
				$("img.picm").attr("src",img2);
			}, 500);
			$("img.pic4").animate({opacity: 1,});
			$("img.picm").animate({opacity: 1,});
		});
		$("div#pic5").click(function(){  /*Pic 1 and Pic 5*/
			img1 = $('img.picm').attr("src");
			img2 = $('img.pic5').attr("src");

			$("img.pic5").animate({opacity: 0,});
			$("img.picm").animate({opacity: 0,});
			timeoutID = setTimeout(function(){
				$("img.pic5").attr("src",img1);
				$("img.picm").attr("src",img2);
			}, 500);
			$("img.pic5").animate({opacity: 1,});
			$("img.picm").animate({opacity: 1,});
		});
		$("div#pic6").click(function(){  /*Pic 1 and Pic 6*/
			img1 = $('img.picm').attr("src");
			img2 = $('img.pic6').attr("src");

			$("img.pic6").animate({opacity: 0,});
			$("img.picm").animate({opacity: 0,});
			timeoutID = setTimeout(function(){
				$("img.pic6").attr("src",img1);
				$("img.picm").attr("src",img2);
			}, 500);
			$("img.pic6").animate({opacity: 1,});
			$("img.picm").animate({opacity: 1,});
		});
		
	});
	$("img.xbutt").click(function() {   /*Close Function*/
		$("img#projimg").animate({
			right: -300,
		});
		$("img.picm").animate({
			opacity: 0,
		});
		$(".projinfo.right").delay(510).animate({
			right: -haw,
		});
		$(".projinfo.left").delay(510).animate({
			left: -haw,
		});
		$("img.xbutt").delay(510).animate({
			left: -100,
		});
		$("img.picm").animate({
			top: -h
		});
		
	});
	
});

document.write('<div class="projinfo left" style="position: fixed; background-color: black; opacity: 0.5; height: ' + h + 'px; width: ' + w/2 +'px; left: -' + w/2 + 'px; top:0; z-index: 1000;"></div>');
document.write('<div class="projinfo right" style="position: fixed; background-color: black; opacity: 0.5; height: ' + h + 'px; width: ' + w/2 +'px; right: -' + w/2 + 'px; top:0; z-index: 1000;"></div>');
document.write("<img class='xbutt' style='position: fixed; top: 0; left: -100px; z-index: 1000'src='http://nathandiaz.tk/images/xbutton.png'></img>");
document.write("<style> img.picm{ opacity: 0; height: " + mainsh + "px; position: fixed; top: 40px; left: 225px; z-index:1001;}</style>");
document.write("<style> img#projimg{ right: -300px; position: fixed; z-index:1001;}</style>");
document.write("<style> img.pic2, img.pic3, img.pic4, img.pic5, img.pic6{ height: " + sidepicsh +"px;}</style>");
document.write("<style> img.pic2{top: " + 20 +"px;}</style>");
document.write("<style> img.pic3{top: " + (sidepicsh + 40) +"px;}</style>");
document.write("<style> img.pic4{top: " + ((2 *sidepicsh) + 60) +"px;}</style>");
document.write("<style> img.pic5{top: " + ((3 *sidepicsh) + 80) +"px;}</style>");
document.write("<style> img.pic6{top: " + ((4 *sidepicsh) + 100) +"px;}</style>");