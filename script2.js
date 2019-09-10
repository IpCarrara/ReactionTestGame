	if (document.documentElement.clientWidth < 480) {
			var forma1 = document.getElementById("figura");
			var novaCor = "";
			var tamanho = "";
			var r = "";
			var g = "";
			var b = "";
			var position1 = "";
			var position2 = "";
			var borda = "";
			var naomostrarContador = 1;
			var bestTimes = new Array();
			var bestTime = "";
	
			
			//Contador//
			
			var startTime = "";
			var endTime = "";
			var timeDiff = ""
		
		
			//Click//
			forma1.onclick = function () {
				// Contador// 
				endTime = new Date();
				document.getElementById("figura").style.display = "none";
				r = Math.floor(Math.random() * 16).toString(16);
				g = Math.floor(Math.random() * 16).toString(16);
				b = Math.floor(Math.random() * 16).toString(16);
				novaCor = "#" + r + g + b;
				//Timer 1 //
				setTimeout(funAparecer, 2000);
				// Random Numbers//
					function stop(){
						clearInterval(interval);
						}
				
					function tamanhoNumber(min,max){
						rendNumber =(Math.floor(Math.random()*(max-min+1)+min));
						tamanho = rendNumber + "px";
						}
						tamanhoNumber(30, 80);
					function posicaoLado(min,max){
						rendNumber2 =(Math.floor(Math.random()*(max-min+1)+min));
						position1 = rendNumber2 + "%";
						}
						posicaoLado(1, 72);
						
					function posicaoTop(min,max){
						rendNumber3 =(Math.floor(Math.random()*(max-min+1)+min));
						position2 = rendNumber3 + "%";
						}
						posicaoTop(10, 60);
						
					function bordaRadius (min,max){
						rendNumber4 = Math.round(Math.random());
							if (rendNumber4 == 1){
								borda = "0%"
							} else {
								borda = "50%"
							}
						}
						bordaRadius (1, 2);
	
						// Contador //
							timeDiff = endTime - startTime;
							timeDiff /= 1000;
							//Contador menor tempo//
							bestTimes.push(timeDiff);
						    bestTime = Math.min(...bestTimes);
							
							//Para contar a partir do segundo tempo//
							if (naomostrarContador == 1){
								document.getElementById("seconds").innerHTML = " ";
							} else {
								document.getElementById("seconds").innerHTML = " " + timeDiff + "s";
								document.getElementById("melhorTempo").innerHTML = " " + bestTime + "s";
							}
							
						naomostrarContador = 2;
						
	
							
				}
					
			function funAparecer (){
				document.getElementById("figura").style.display = "block";
				document.getElementById("figura").style.backgroundColor = novaCor;
				document.getElementById("figura").style.height = tamanho;
				document.getElementById("figura").style.width = tamanho;
				document.getElementById("figura").style.left = position1;
				document.getElementById("figura").style.top = position2;
				document.getElementById("figura").style.borderRadius = borda;
				startTime = new Date();
				endTime = "";
			}
	} else {
			
			var forma1 = document.getElementById("figura");
			var novaCor = "";
			var tamanho = "";
			var r = "";
			var g = "";
			var b = "";
			var position1 = "";
			var position2 = "";
			var borda = "";
			var naomostrarContador = 1;
			var bestTimes = new Array();
			var bestTime = "";
	
			
			//Contador//
			
			var startTime = "";
			var endTime = "";
			var timeDiff = ""
		
		
			//Click//
			forma1.onclick = function () {
				// Contador// 
				endTime = new Date();
				document.getElementById("figura").style.display = "none";
				r = Math.floor(Math.random() * 16).toString(16);
				g = Math.floor(Math.random() * 16).toString(16);
				b = Math.floor(Math.random() * 16).toString(16);
				novaCor = "#" + r + g + b;
				//Timer 1 //
				setTimeout(funAparecer, 2000);
				// Random Numbers//
					function stop(){
						clearInterval(interval);
						}
				
					function tamanhoNumber(min,max){
						rendNumber =(Math.floor(Math.random()*(max-min+1)+min));
						tamanho = rendNumber + "px";
						}
						tamanhoNumber(30, 110);
					function posicaoLado(min,max){
						rendNumber2 =(Math.floor(Math.random()*(max-min+1)+min));
						position1 = rendNumber2 + "%";
						}
						posicaoLado(1, 85);
						
					function posicaoTop(min,max){
						rendNumber3 =(Math.floor(Math.random()*(max-min+1)+min));
						position2 = rendNumber3 + "%";
						}
						posicaoTop(10, 62);
						
					function bordaRadius (min,max){
						rendNumber4 = Math.round(Math.random());
							if (rendNumber4 == 1){
								borda = "0%"
							} else {
								borda = "50%"
							}
						}
						bordaRadius (1, 2);
	
						// Contador //
							timeDiff = endTime - startTime;
							timeDiff /= 1000;
							//Contador menor tempo//
							bestTimes.push(timeDiff);
						    bestTime = Math.min(...bestTimes);
							
							//Para contar a partir do segundo tempo//
							if (naomostrarContador == 1){
								document.getElementById("seconds").innerHTML = " ";
							} else {
								document.getElementById("seconds").innerHTML = " " + timeDiff + "s";
								document.getElementById("melhorTempo").innerHTML = " " + bestTime + "s";
							}
							
						naomostrarContador = 2;
						
	
							
				}
					
			function funAparecer (){
				document.getElementById("figura").style.display = "block";
				document.getElementById("figura").style.backgroundColor = novaCor;
				document.getElementById("figura").style.height = tamanho;
				document.getElementById("figura").style.width = tamanho;
				document.getElementById("figura").style.left = position1;
				document.getElementById("figura").style.top = position2;
				document.getElementById("figura").style.borderRadius = borda;
				startTime = new Date();
				endTime = "";
			}
			
	}
			