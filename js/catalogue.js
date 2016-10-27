		// alert($);
		$('.nav-above>ul>li>a').mouseover(function(){
			$(this).css('text-decoration','underline');
		}).mouseout(function(){
			$(this).css('text-decoration','');
		});

		$('#nav-left-a').mouseover(function(){
			$(this).css('background','white');
			$('.nav-menu-one').css('display','block');

		}).mouseout(function(){
			$(this).css('background','#f5f5f5');
			$('.nav-menu-one').css('display','none');

		});
		$('#nav-left-b').mouseover(function(){
			$(this).css('background','white');
			$('.nav-menu-two').css('display','block');

		}).mouseout(function(){
			$(this).css('background','#f5f5f5');
			$('.nav-menu-two').css('display','none');

		});
		$('.nav-right-two').mouseover(function(){
			$('.nav-menu-three').css('display','block');

		}).mouseout(function(){
			$('.nav-menu-three').css('display','none');
		});

		$('.nav-right-three').mouseover(function(){
			$('.nav-menu-four').css('display','block');

		}).mouseout(function(){
			$('.nav-menu-four').css('display','none');
		});

		$('.nav-right-five').mouseover(function(){
			$('.nav-menu-five').css('display','block');

		}).mouseout(function(){
			$('.nav-menu-five').css('display','none');
		});

		$('.nav-right-eight').mouseover(function(){
			$('.nav-menu-six').css('display','block');

		}).mouseout(function(){
			$('.nav-menu-six').css('display','none');

		});

		$('nav>p>a').eq(0).mouseover(function(){
			$(this).css('color','#f60').css('text-decoration','underline');
		}).mouseout(function(){
			$(this).css('color','').css('text-decoration','');
		});

		$('.container-nav>ul>a').mouseover(function(){
			$(this).children().css('color','#f60').css('text-decoration','underline');
		}).mouseout(function(){
			$(this).children().css('color','').css('text-decoration','');
		});

		$('.menu-center-top').mouseover(function(){
			$(this).css('background','#FAFAFA');
		}).mouseout(function(){
			$(this).css('background','');
		});
		$('.menu-center-top>h3>a').mouseover(function(){
			$(this).css('color','#f60').css('text-decoration','underline');
		}).mouseout(function(){
			$(this).css('color','').css('text-decoration','');
		});

		$('.menu-center-bottom>ul>a>li').mouseover(function(){
			$(this).css('background','#fafafa');
		}).mouseout(function(){
			$(this).css('background','');
		});

		$('.menu-center-bottom>ul>a>li>span').mouseover(function(){
			$(this).css('color','#f60');
		}).mouseout(function(){
			$(this).css('color','');
		});

		$('.menu-bottom>ul>a>li').mouseover(function(){
			$(this).css('background','#fafafa');
		}).mouseout(function(){
			$(this).css('background','');
		});

		$('.menu-bottom>ul>a>li>span').mouseover(function(){
			$(this).css('color','#f60');
		}).mouseout(function(){
			$(this).css('color','');
		});

		$('.footer-center-bottom>dl>dd').mouseover(function(){
				$(this).children().css('color','#f60').css('text-decoration','underline');
		}).mouseout(function(){
				$(this).children().css('color','').css('text-decoration','');
		});
			// console.log($('.footer-center-bottom>dl>dd'));
		$('.all-footer>ul>li>a').mouseover(function(){
				$(this).css('text-decoration','underline');
		}).mouseout(function(){
				$(this).css('text-decoration','none');
		});

			// console.log($('.container-center>div>a>img'));
		$('.container-center>div>a>img').mouseover(function(){
				$(this).css('opacity','0.8');
		}).mouseout(function(){
				$(this).css('opacity','1');
		});

		// console.log($('.container-nav>ul').children().eq(6));
		$('.price>ul>li>span').each(function(){
			$(this).click(function(){
				var add = ($('<div class="clone"></div>'));
				add.text($(this).text()+' × ');
				$('.container-nav>ul').children().eq(6).after(add);

			});
		});

		$('.cpu>ul>li>span').each(function(){
			$(this).click(function(){
				var add = ($('<div class="clone"></div>'));
				add.text($(this).text()+' × ');
				$('.container-nav>ul').children().eq(6).after(add);
			});
		});

		$('.clone').click(function(){
			alert(111);
			$(this).css('display','none');
		});
		