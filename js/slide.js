var img = document.getElementById('img');
		var images =['images/banner1.jpg','images/banner2.jpg','images/banner3.jpg','images/banner4.jpg','images/banner5.jpg'];
		var x=0;
		function slide(){
			if(x<images.length){
				x=x+1;
			}
			else{
				x=1;
			}

			document.getElementById('img').innerHTML ="<img src="+images[x-1]+">";	

		}
		setInterval(slide,3000);
