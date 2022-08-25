function clickedBtn(){
		// 로딩 표시
		showLoading();
		// 로딩 숨기기(2초 후)
		setTimeout("hideLoading()", 2000);
    }
    function showLoading(){
    //화면의 높이와 너비를 구합니다.
		var maskHeight = $(document).height();
		var maskWidth  = window.document.body.clientWidth;

		//화면에 출력할 마스크를 설정해줍니다.
		var mask ="<div id='mask' style='position:absolute; z-index:50; background-color:#8C8C8C; left:0; top:0;'></div>";

		//화면에 레이어 추가
		$('body').append(mask)

		//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
		$('#mask').css({
			'width' : maskWidth
			,'height': maskHeight
		});

		$(".loader").show();
    }
	function hideLoading(){
		$("#mask").remove();
		$(".loader").hide();
	}
	
	$(window).on("load",function() {
		$('.loader').fadeOut();
	})
	$(function(){
	  $('#game_introduce').click(function(){
		  clickedBtn();
		$("#contents").load("./html/game_introduce.html");
	  });
	});

	$(function(){
	  $('#winner').click(function(){
		  clickedBtn();
		$("#contents").load("./html/winner.html");
	  });
	});

  $(function(){
	  $('#goose_job').click(function(){
		  clickedBtn();
		$("#contents").load("html/goose_job.html");
	  });
	});
  
  $(function(){
	  $('#duck_job').click(function(){
		  clickedBtn();
		$("#contents").load("html/duck_job.html");
	  });
	});

  $(function(){
	  $('#neutrality_job').click(function(){
		  clickedBtn();
		$("#contents").load("html/neutrality_job.html");
	  });
	});

	$(function(){
	  $('#job_introduce').click(function(){
		  clickedBtn();
		$("#contents").load("html/job_introduce.html");
	  });
	});
	
	$(function(){
	  $('#map').click(function(){
		  clickedBtn();
		$("#contents").load("html/map.html");
	  });
	});
	
	$(function(){
	  $('#mission').click(function(){
		  clickedBtn();
		$("#contents").load("html/mission.html");
	  });
	});
	
	$(function(){
	  $('#fashion').click(function(){
		  clickedBtn();
		$("#contents").load("html/fashion.html");
	  });
	});
	$(function(){
	  $('#geowi_map').click(function(){
		  clickedBtn();
		$("#contents").load("html/geowi_map.html");
	  });
	});
	$(function(){
	  $('#ziha_map').click(function(){
		  clickedBtn();
		$("#contents").load("html/ziha_map.html");
	  });
	});