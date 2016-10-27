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


		//放大镜
		$('.small').mousemove(function(e){
			$('.move').css('display','block');
			$('.big').css('display','block');

			$('.bigPic')[0].src = $('.small_pic')[0].src;

			var x = e.pageX;
			var y = e.pageY;
			// console.log(y)

			var sl = $('.small').position().left;
			var st = 375;
			// console.log(sl)
			console.log(st)
			
			var w = $('.move').width()/2;
			var h = $('.move').height()/2;
			// console.log(w);
			
			var newLeft = x - sl - w;
			var newTop = y - st - h;

			if(newLeft<=0){
				newLeft = 0;
			}

			var maxLeft = $('.small').width() - $('.move').width();
			if(newLeft>=maxLeft){
				newLeft = maxLeft;
			}

			if(newTop<=0){
				newTop = 0;
			}

			var maxTop = $('.small').height() - $('.move').height();
			if(newTop>=maxTop){
				newTop = maxTop;
			}

			// console.log(newTop)
			$('.move').css('left',''+newLeft+'px');
			$('.move').css('top',''+newTop+'px');


			var bLeft = $('.bigPic').width() * newLeft / $('.small').width();
			var bTop = $('.bigPic').height() * newTop / $('.small').height();	

			$('.bigPic').css('left',''+-bLeft+'px');
			$('.bigPic').css('top',''+-bTop+'px');
		});

		$('.small').mouseout(function(){
			$('.move').css('display','none');
			$('.big').css('display','none');
		});

		$('.dian>ul>li').each(function(){
			$(this).click(function(){
				$('.small_pic')[0].src = $(this)[0].children[0].src;
			});
		});

		//单击事件
		$('.evaluation').on('click','.submit',function(){
			var comments = $('.comments').val();
			//获取评论
			getComments(comments);


		});
		
		function getComments(comments) {
			$.ajax({
				url:'../php/evaluation.php',
				data:{'neiRong':comments},
				type:"post",
				success:function(res){
					$('.show').append("<div>"+res+"</div>");
					$('.comments').val('');
				},
				error:function(){
					alert("获取数据出错。");
					$('.comments').val('');
				}
			});
		}






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
