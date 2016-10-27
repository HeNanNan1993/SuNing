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

		//反选
		

		//总价格的输出
		
		var moneyTwo = 0;
		var moneyOne = 0;
		var numOne = 0;
		var numTwo = 0;
		
		// console.log($('input[name="choose[]"]').eq(1).attr('checked'));
		// if($('input[name="choose[]"]').eq(0).attr('checked')){

		// 	moneyOne = $('.money-one>span').text();
		// }
		// // console.log($('.money-two>span').text())
		// // console.log($('.money-one>span').text())
		// if($('input[name="choose[]"]').eq(1).attr('checked')){
		// 	moneyTwo = $('.money-two>span').text();
		// }

		
		//加减商品数量的单击事件
		// console.log($('.number-one>span').eq(0));
		$('.number-one>span').eq(0).click(function(){
				numOne--;
				if(numOne<=0){
					numOne=0;
				}
				$('.number-one>span').eq(1).text('　'+numOne+'　');
				// 改变小计的值
				$('.money-one>span').text(2499*numOne);

				if($('input[name="choose[]"]').eq(0).attr('checked')){
					moneyOne = $('.money-one>span').text();
					// console.log(moneyOne);
					
				}else{
					moneyOne = 0;
				}
				// console.log($('.money-two>span').text())
				// console.log($('.money-one>span').text())
				if($('input[name="choose[]"]').eq(1).attr('checked')){
					moneyTwo = $('.money-two>span').text();
					// console.log(moneyTwo);
				}else{
					moneyTwo = 0;
				}
				var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
				// console.log(moneyTwo)
				$('.all-price>span').text(allMoney);

		});

		$('.number-one>span').eq(2).click(function(){
				numOne++;
				if(numOne<=0){
					numOne=0;
				}
				$('.number-one>span').eq(1).text('　'+numOne+'　');
				// 改变小计的值
				$('.money-one>span').text(2499*numOne);

				if($('input[name="choose[]"]').eq(0).attr('checked')){

					moneyOne = $('.money-one>span').text();
				}else{
					moneyOne = 0;
				}
				// console.log($('.money-two>span').text())
				// console.log($('.money-one>span').text())
				if($('input[name="choose[]"]').eq(1).attr('checked')){
					moneyTwo = $('.money-two>span').text();
				}else{
					moneyTwo = 0;
				}

				var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
				$('.all-price>span').text(allMoney);

		});

		// console.log($('.money-one>span'));
		
		$('.number-two>span').eq(0).click(function(){
				numTwo--;
				if(numTwo<=0){
					numTwo=0;
				}
				$('.number-two>span').eq(1).text('　'+numTwo+'　');
				// 改变小计的值
				$('.money-two>span').text(2499*numTwo);

				if($('input[name="choose[]"]').eq(0).attr('checked')){

					moneyOne = $('.money-one>span').text();
				}else{
					moneyOne = 0;
				}
				// console.log($('.money-two>span').text())
				// console.log($('.money-one>span').text())
				if($('input[name="choose[]"]').eq(1).attr('checked')){
					moneyTwo = $('.money-two>span').text();
				}else{
					moneyTwo = 0;
				}

				var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
				$('.all-price>span').text(allMoney);

		});

		$('.number-two>span').eq(2).click(function(){
				numTwo++;
				if(numTwo<=0){
					numTwo=0;
				}
				$('.number-two>span').eq(1).text('　'+numTwo+'　');
				// 改变小计的值
				$('.money-two>span').text(2999*numTwo);

				if($('input[name="choose[]"]').eq(0).attr('checked')){

					moneyOne = $('.money-one>span').text();
				}else{
					moneyOne = 0;
				}
				// console.log($('.money-two>span').text())
				// console.log($('.money-one>span').text())
				if($('input[name="choose[]"]').eq(1).attr('checked')){
					moneyTwo = $('.money-two>span').text();
				}else{
					moneyTwo = 0;
				}

				var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
				$('.all-price>span').text(allMoney);

		});

		//设置多选按钮的单击事件
		$('input[name="choose[]"]').eq(0).click(function(){
				if($('input[name="choose[]"]').eq(0).attr('checked')){

					moneyOne = $('.money-one>span').text();
				}else{
					moneyOne = 0;
				}
				// console.log($('.money-two>span').text())
				// console.log($('.money-one>span').text())
				if($('input[name="choose[]"]').eq(1).attr('checked')){
					moneyTwo = $('.money-two>span').text();
				}else{
					moneyTwo = 0;
				}

				var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
				$('.all-price>span').text(allMoney);


		});

		$('input[name="choose[]"]').eq(1).click(function(){
				if($('input[name="choose[]"]').eq(0).attr('checked')){

					moneyOne = $('.money-one>span').text();
				}else{
					moneyOne = 0;
				}
				// console.log($('.money-two>span').text())
				// console.log($('.money-one>span').text())
				if($('input[name="choose[]"]').eq(1).attr('checked')){
					moneyTwo = $('.money-two>span').text();
				}else{
					moneyTwo = 0;
				}

				var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
				$('.all-price>span').text(allMoney);
		});

		$('.selected>button').click(function(){
			$('input[name="choose[]"]').each(function(){
				// $(this) 表示自身 this 也表示为当前对象
				this.checked = !this.checked;
				// return false;
			});
			if($('input[name="choose[]"]').eq(0).attr('checked')){

					moneyOne = $('.money-one>span').text();
				}else{
					moneyOne = 0;
				}
				// console.log($('.money-two>span').text())
				// console.log($('.money-one>span').text())
				if($('input[name="choose[]"]').eq(1).attr('checked')){
					moneyTwo = $('.money-two>span').text();
				}else{
					moneyTwo = 0;
				}

				var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
				$('.all-price>span').text(allMoney);

		});

		//全选
		$('.all>button').click(function(){
			$('input[name="choose[]"]').attr('checked',true);

			if($('input[name="choose[]"]').eq(0).attr('checked')){

					moneyOne = $('.money-one>span').text();
				}else{
					moneyOne = 0;
				}
				// console.log($('.money-two>span').text())
				// console.log($('.money-one>span').text())
				if($('input[name="choose[]"]').eq(1).attr('checked')){
					moneyTwo = $('.money-two>span').text();
				}else{
					moneyTwo = 0;
				}

				var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
				$('.all-price>span').text(allMoney);
		});


		// console.log(allMoney);
		//删除按钮的点击事件
		$('.del-one').click(function(){
			$('.select-one').css('display','none');
			moneyOne = 0;
			var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
			$('.all-price>span').text(allMoney);
			return false;
		});

		$('.del-two').click(function(){
			$('.select-two').css('display','none');
			moneyTwo = 0;
			var allMoney = parseInt(moneyOne)+parseInt(moneyTwo);
			$('.all-price>span').text(allMoney);
			return false;
		});

		$('.all-footer>ul>li>a').mouseover(function(){
				$(this).css('text-decoration','underline');
			}).mouseout(function(){
				$(this).css('text-decoration','none');
		});
		
		



		
		

				

