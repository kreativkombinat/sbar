//KREATIVKOMBINAT GbR //www.kreativkombinat.de //info@kreativkombinat.de	

/***************************************************
       ACCORDION
***************************************************/
$(document).ready(function(){ 
  $('.trigger-button').click(function() {
    $(".trigger-button").removeClass("active")
    $('.accordion').slideUp('normal');
    if($(this).next().is(':hidden') == true) {
      $(this).next().slideDown('normal');
      $(this).addClass("active");
     } 
   });
  $('.accordion').hide();
});				

//About
			var popupAboutStatus = 0;
			
			function loadPopupAbout(){
				if(popupAboutStatus==0){
					$("#popupAbout").fadeIn("slow");
					popupAboutStatus = 1;
				}
			}
			
			function disablePopupAbout(){
				if(popupAboutStatus==1){
					$("#popupAbout").fadeOut("slow");
					popupAboutStatus = 0;
				}
			}
			
			function centerPopupAbout(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAboutHeight = $("#popupAbout").height();
				var popupAboutWidth = $("#popupAbout").width();
				$("#popupAbout").css({
					"position": "absolute",
					"top": windowHeight/2-popupAboutHeight/2,
					"left": windowWidth/2-popupAboutWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAbout").fadeOut();
				popupAboutStatus = 0;
				$("#about").click(function(){
				$("#popupAbout").css({
					"visibility": "visible"	});
					disablePopupSpeisekarte();
					disablePopupContact();
					disablePopupNews();
					centerPopupAbout();
					loadPopupAbout();
				    $("#popupAbout").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupAboutClose").click(function(){
					disablePopupAbout();
				});
				$("#bg").click(function(){
					disablePopupAbout();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAbout();
			});
			});


//Speisekarte
			var popupSpeisekarteStatus = 0;
			
			function loadPopupSpeisekarte(){
				if(popupSpeisekarteStatus==0){
					$("#popupSpeisekarte").fadeIn("slow");
					popupSpeisekarteStatus = 1;
				}
			}
			
			function disablePopupSpeisekarte(){
				if(popupSpeisekarteStatus==1){
					$("#popupSpeisekarte").fadeOut("slow");
					popupSpeisekarteStatus = 0;
				}
			}
			
			function centerPopupSpeisekarte(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupSpeisekarteHeight = $("#popupSpeisekarte").height();
				var popupSpeisekarteWidth = $("#popupSpeisekarte").width();
				$("#popupSpeisekarte").css({
					"position": "absolute",
					"top": windowHeight/2-popupSpeisekarteHeight/2,
					"left": windowWidth/2-popupSpeisekarteWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupSpeisekarte").fadeOut();
				popupSpeisekarteStatus = 0;
				$("#Speisekarte").click(function(){
				$("#popupSpeisekarte").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupContact();
					disablePopupNews();					
					centerPopupSpeisekarte();
					loadPopupSpeisekarte();
				    $("#popupSpeisekarte").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupSpeisekarteClose").click(function(){
					disablePopupSpeisekarte();
				});
				$("#bg").click(function(){
					disablePopupSpeisekarte();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupSpeisekarte();
			});
			});


//News
			var popupNewsStatus = 0;
			
			function loadPopupNews(){
				if(popupNewsStatus==0){
					$("#popupNews").fadeIn("slow");
					popupNewsStatus = 1;
				}
			}
			
			function disablePopupNews(){
				if(popupNewsStatus==1){
					$("#popupNews").fadeOut("slow");
					popupNewsStatus = 0;
				}
			}
			
			function centerPopupNews(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupNewsHeight = $("#popupNews").height();
				var popupNewsWidth = $("#popupNews").width();
				$("#popupNews").css({
					"position": "absolute",
					"top": windowHeight/2-popupNewsHeight/2,
					"left": windowWidth/2-popupNewsWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupNews").fadeOut();
				popupNewsStatus = 0;
				$("#News").click(function(){
				$("#popupNews").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupSpeisekarte();					
					disablePopupContact();					
					centerPopupNews();
					loadPopupNews();
				    $("#popupNews").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupNewsClose").click(function(){
					disablePopupNews();
				});
				$("#bg").click(function(){
					disablePopupNews();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupNews();
			});
			});


//Contact
			var popupContactStatus = 0;
			
			function loadPopupContact(){
				if(popupContactStatus==0){
					$("#popupContact").fadeIn("slow");
					popupContactStatus = 1;
				}
			}
			
			function disablePopupContact(){
				if(popupContactStatus==1){
					$("#popupContact").fadeOut("slow");
					popupContactStatus = 0;
				}
			}
			
			function centerPopupContact(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupContactHeight = $("#popupContact").height();
				var popupContactWidth = $("#popupContact").width();
				$("#popupContact").css({
					"position": "absolute",
					"top": windowHeight/2-popupContactHeight/2,
					"left": windowWidth/2-popupContactWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupContact").fadeOut();
				popupContactStatus = 0;
				$("#contact").click(function(){
				$("#popupContact").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupSpeisekarte();
					disablePopupNews();					
					centerPopupContact();
					loadPopupContact();
				    $("#popupContact").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupContactClose").click(function(){
					disablePopupContact();
				});
				$("#bg").click(function(){
					disablePopupContact();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupContact();
			});
			});