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
	var i=0;
		function change(){
			setInterval(function(){
				if(i%2==0){
					$('.changeImg').css('src','../images/ScreenShot00005.jpg');
				}else{
					$('.changeImg').css('src','../images/ScreenShot00007.jpg');
				}
				i++;
			},1000);
		};
	change();
		// console.log($('.header-bottom-center>ul').eq(0).children().length);
		//$('.header-bottom-center>ul').eq(0).children() 表示所有的li，轮播的元素
		// console.log($('.header-bottom-center>div>ul').children());
		// $('.header-bottom-center>div>ul').children() 表示所有的数字li
		var j =0;
		var run = null;
		//左右箭头
		function autoRunOne(){
				run = setInterval(function(){
					// 当前显示的图片要隐藏
					$('.header-bottom-center>ul').eq(0).children().eq(j).removeClass('active');

					// 当前显示激活的数字的背景要被移除
					$('.header-bottom-center>div>ul').children().children().eq(j).removeClass('active_num');

					// j 下标，自增，表示下一张
					j++;

					// 如果循环到了最后一张图片
					if(j==$('.header-bottom-center>ul').eq(0).children().length){
						j=0;
					}
					// console.log(j);
					// 下一张显示
					$('.header-bottom-center>ul').eq(0).children().eq(j).attr('class','active');
					// 下一个数字的背景设置为激活
					$('.header-bottom-center>div>ul').children().eq(j).children(0).attr('class','active_num');
					// console.log($('.header-bottom-center>ul').eq(0).children().eq(j));
				},2000);
			}
		autoRunOne();

		// 给每一张图都设置鼠标进入、移出的事件
		$('.header-bottom-center>ul').eq(0).children().each(function(){
			$(this).mouseover(function(){
				clearInterval(run);
				$('.left-one').css('display','block');
				$('.right-one').css('display','block');
			}).mouseout(function(){
			autoRunOne();

			$('.left-one').css('display','none');
			$('.right-one').css('display','none');
			});

		});

		// 给每一个数字都设置鼠标的移入、移出事件
		 	var num_lis = document.getElementsByClassName('num_list')[0].children[0].children;
		 	var lis = document.getElementsByClassName('header-bottom-center')[0].children[0].children;
			for(var k=0;k<num_lis.length;k++){
				// 将数字对应的下标绑定到每一个span中
				num_lis[k].firstElementChild.setAttribute('num',k);

				// 移入事件
				num_lis[k].onmouseover = function(){
					// 停止计时器
					clearInterval(run);

					// 移出之前的元素的 ---> i 图片
					lis[j].className = '';
					// 数字列表位置的背景移除
					num_lis[j].firstElementChild.className = '';

					// 上面的图片对应的当前的数字进行显示
					j = this.firstElementChild.getAttribute('num');
					// alert(j);
					// 当前图
					lis[j].className = 'active';
					// 当前数字
					num_lis[j].firstElementChild.className = 'active_num';
				}
			
			num_lis[k].onmouseout = function(){
					// 重新启动定时器
					autoRunOne();
				}
			}
			var num_list=document.getElementsByClassName('num_list')[0];
			// 当鼠标移入、移除 num_list div时相应的停止、开始
			num_list.onmouseover = function(){
				// 停止
				clearInterval(run);
			}

			num_list.onmouseout = function(){
				// 先清除，再调用
				clearInterval(run);

				// 调用函数
				autoRunOne();
			}

			var leftOne=document.getElementsByClassName('left-one')[0];
			var rightOne=document.getElementsByClassName('right-one')[0];
			// 给右箭头设置over和out事件
			rightOne.onmouseover = function(){ 
				// 显示左右箭头
				leftOne.style.display = 'block';
				rightOne.style.display = 'block';
				
				rightOne.style.cursor = 'pointer';

				// 停止定时器
				clearInterval(run);
			}
			rightOne.onmouseout = function(){
				// 隐藏左右箭头
				leftOne.style.display = 'none';
				rightOne.style.display = 'block';

				// 启动定时器
				autoRunOne();
			}

			// 当单击右箭头时，图片向前
			rightOne.onclick = function(){
				// 将之前显示的图片、数字隐藏
				lis[j].className = '';
				// 数字列表位置的背景移除
				num_lis[j].firstElementChild.className = '';

				// i++ 之后，显示新的
				j++;

				// 判断临界点
				if(j==lis.length){
					j=0;
				}

				// 新图
				lis[j].className = 'active';
				// 数字列表位置的背景移除
				num_lis[j].firstElementChild.className = 'active_num';			
			}

			// 给左箭头设置over和out事件
			leftOne.onmouseover = function(){ 
				// 显示左右箭头
				leftOne.style.display = 'block';
				rightOne.style.display = 'block';
				leftOne.style.cursor = 'pointer';

				// 停止定时器
				clearInterval(run);
			}
			leftOne.onmouseout = function(){
				// 隐藏左右箭头
				leftOne.style.display = 'none';
				rightOne.style.display = 'none';

				// 启动定时器
				autoRunOne();
			}

			// 当单击右箭头时，图片向前
			leftOne.onclick = function(){
				// 将之前显示的图片、数字隐藏
				lis[j].className = '';
				// 数字列表位置的背景移除
				num_lis[j].firstElementChild.className = '';

				// i的值如果是0，表示当前已经是第一张

				// i++ 之后，显示新的
				j--;

				// 判断临界点
				if(j<0){
					// 下标的最大值 = 长度 - 1
					j=lis.length - 1;
				}

				// 新图
				lis[j].className = 'active';
				// 数字列表位置的背景移除
				num_lis[j].firstElementChild.className = 'active_num';			
			}
			var lisTwo=document.getElementsByClassName('container-top-bottom')[0].children[0].children;
			var leftTwo=document.getElementsByClassName('left-two')[0];
			var rightTwo=document.getElementsByClassName('right-two')[0];
			// console.log(lisTwo)
			$('.container-top-bottom>ul').mouseover(function(){
				leftTwo.style.display = 'block';
				rightTwo.style.display = 'block';
			}).mouseout(function(){
				leftTwo.style.display = 'none';
				rightTwo.style.display = 'none';
			});

			$('.left-two').mouseover(function(){
				leftTwo.style.display = 'block';
				leftTwo.style.cursor = 'pointer';
				rightTwo.style.display = 'block';
			}).mouseout(function(){
				leftTwo.style.display = 'none';
				rightTwo.style.display = 'none';
			});

			$('.right-two').mouseover(function(){
				leftTwo.style.display = 'block';
				rightTwo.style.display = 'block';
				rightTwo.style.cursor = 'pointer';
			}).mouseout(function(){
				leftTwo.style.display = 'none';
				rightTwo.style.display = 'none';
			});

			var h=0;
			// 当单击右箭头时，图片向前
			rightTwo.onclick = function(){
				// 将之前显示的图片、数字隐藏
					lisTwo[h].className = '';
					// h++ 之后，显示新的
					h++;

					// 判断临界点
					if(h==lisTwo.length){
						h=0;
					}
					// 新图
					lisTwo[h].className = 'active';	
			}
			// 当单击右箭头时，图片向前
			leftTwo.onclick = function(){
				// 将之前显示的图片、数字隐藏
				lisTwo[h].className = '';

				// h++ 之后，显示新的
				h--;

				// 判断临界点
				if(h<0){
					// 下标的最大值 = 长度 - 1
					h=lisTwo.length - 1;
				}

				// 新图
				lisTwo[h].className = 'active';	
			}

			$('.container-head-one-two').mouseover(function(){
				$('.container-head-one-two').css('box-shadow','0px 2px 5px 3px #888');
			}).mouseout(function(){
				$('.container-head-one-two').css('box-shadow','');
			});

			$('.container-head-one-three').mouseover(function(){
				$('.container-head-one-three').css('box-shadow','0px 2px 5px 3px #888');
			}).mouseout(function(){
				$('.container-head-one-three').css('box-shadow','');
			});

			$('.container-head-one-four').mouseover(function(){
				$('.container-head-one-four').css('box-shadow','0px 2px 5px 3px #888');
			}).mouseout(function(){
				$('.container-head-one-four').css('box-shadow','');
			});

			$('.container-head-one-five').mouseover(function(){
				$('.container-head-one-five').css('box-shadow','0px 2px 5px 3px #888');
			}).mouseout(function(){
				$('.container-head-one-five').css('box-shadow','');
			});

			$('.container-head-one-seven').mouseover(function(){
				$('.container-head-one-seven').css('box-shadow','0px 2px 5px 3px #888');
			}).mouseout(function(){
				$('.container-head-one-seven').css('box-shadow','');
			});

			$('.container-head-one-eight').mouseover(function(){
				$('.container-head-one-eight').css('box-shadow','0px 2px 5px 3px #888');
			}).mouseout(function(){
				$('.container-head-one-eight').css('box-shadow','');
			});

			$('.container-head-one-nine').mouseover(function(){
				$('.container-head-one-nine').css('box-shadow','0px 2px 5px 3px #888');
			}).mouseout(function(){
				$('.container-head-one-nine').css('box-shadow','');
			});

			$('.container-head-one-ten').mouseover(function(){
				$('.container-head-one-ten').css('box-shadow','0px 2px 5px 3px #888');
			}).mouseout(function(){
				$('.container-head-one-ten').css('box-shadow','');
			});

			$('.menu-left').children().each(function(){
				$(this).mouseover(function(){
					$('.all-menu').css('display','block')
					}).mouseout(function(){
						$('.all-menu').css('display','none');
			});

			});

			$('.container-five>table>tbody>tr>td').mouseover(function(){
				$(this).children().css('color','#f60').css('text-decoration','underline');
			}).mouseout(function(){
				$(this).children().css('color','#666').css('text-decoration','none');
			});
			// console.log($('.container-five>table>tbody>tr>td'));

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