
		var x = 0;
		
		var y1 = 650;
		var y2 = 650;
		var y3 = 650;
		var y4 = 650;
		var y5 = 650;
		var y6 = 650;
		var y7 = 650;
		
		var grid = [[0, 0, 0, 0, 0 ,0],
					[0, 0, 0, 0, 0 ,0],
					[0, 0, 0, 0, 0 ,0],
					[0, 0, 0, 0, 0 ,0],
					[0, 0, 0, 0, 0 ,0],
					[0, 0, 0, 0, 0 ,0],
					[0, 0, 0, 0, 0 ,0]];
		
		var color;
		var count;
		var alertSuccess = true;
		var currentPlayer;
		var rowLimit = 0;
		var placeholder;
		var toggle = 0;
		var canvas;
		var ctx;

		$(function(){
			canvas = document.getElementById("myCanvas");
			ctx = canvas.getContext("2d");
		});

		function resetWin(){
			count = 0;
		}
		
		function togglePlayers(){
			if(toggle == 1){
				toggle = 0;
				color = 'white';
				return 2;
			}
			else{
				toggle = 1;
				color = 'black';
				return 1;
			}
		}
		
		function checkStraightLeft(y, x, player){
			if(count == 4){
				if(alertSuccess == true){
					alert("Player " + player + " wins!");
					alertSuccess = false;
					return 0;
				}
			}
			else{
			console.log("check left");
			console.log("current grid is " + " x: " + x + " and " + " y: " + y + " value " + player);
				if(grid[y][x] == player && grid[y][x] > 0){
					count++;
					return checkStraightLeft(y, x-1, player);
					}
				else
					resetWin();
					return 0;
			}
		}
		
		function checkStraightRight(y, x, player){
			if(count == 4){
				if(alertSuccess == true){
					alert("Player " + player + " wins!");
					alertSuccess = false;
					return 0;
				}
			}
			else{
			console.log("check right");
			console.log("current grid is " + " x: " + x + " and " + " y: " + y + " value " + player);
				if(grid[y][x] == player && grid[y][x] > 0){
					count++;
					return checkStraightRight(y, x+1, player);
					}
				else
					resetWin();
					return 0;
			}
		}
		
		function checkStraightUp(y, x, player){
			if(count == 4){
				if(alertSuccess == true){
					alert("Player " + player + " wins!");
					alertSuccess = false;
					return 0;
				}
			}
			else{
			console.log("check up");
			console.log("current grid is " + " x: " + x + " and " + " y: " + y + " value " + player);
				if(grid[y][x] == player && grid[y][x] > 0){
					count++;
					return checkStraightUp(y-1, x, player);
					}
				else
					resetWin();
					return 0;
			}
		}
		
		function checkDiagonalRightUp(y, x, player){
			if(count == 4){
				if(alertSuccess == true){
					alert("Player " + player + " wins!");
					alertSuccess = false;
					return 0;
				}
			}
			else{
			console.log("check up");
			console.log("current grid is " + " x: " + x + " and " + " y: " + y + " value " + player);
				if(grid[y][x] == player && grid[y][x] > 0){
					count++;
					return checkDiagonalRightUp(y-1, x+1, player);
					}
				else
					resetWin();
					return 0;
			}
		}
		
		function checkDiagonalLeftUp(y, x, player){
			if(count == 4){
				if(alertSuccess == true){
					alert("Player " + player + " wins!");
					alertSuccess = false;
					return 0;
				}
			}
			else{
			console.log("check up");
			console.log("current grid is " + " x: " + x + " and " + " y: " + y + " value " + player);
				if(grid[y][x] == player && grid[y][x] > 0){
					count++;
					return checkDiagonalLeftUp(y-1, x-1, player);
					}
				else
					resetWin();
					return 0;
			}
		}
		
		function checkDiagonalRightDown(y, x, player){
			if(count == 4){
				if(alertSuccess == true){
					alert("Player " + player + " wins!");
					alertSuccess = false;
					return 0;
				}
			}
			else{
			console.log("check up");
			console.log("current grid is " + " x: " + x + " and " + " y: " + y + " value " + player);
				if(grid[y][x] == player && grid[y][x] > 0){
					count++;
					return checkDiagonalRightDown(y+1, x+1, player);
					}
				else
					resetWin();
					return 0;
			}
		}
		
		function checkDiagonalLeftDown(y, x, player){
			if(count == 4){
				if(alertSuccess == true){
					alert("Player " + player + " wins!");
					alertSuccess = false;
					return 0;
				}
			}
			else{
			console.log("check up");
			console.log("current grid is " + " x: " + x + " and " + " y: " + y + " value " + player);
				if(grid[y][x] == player && grid[y][x] > 0){
					count++;
					return checkDiagonalLeftDown(y+1, x-1, player);
					}
				else
					resetWin();
					return 0;
			}
		}
		
		function checkStraightDown(y, x, player){
			if(count == 4){
				if(alertSuccess == true){
					alert("Player " + player + " wins!");
					alertSuccess = false;
					return 0;
				}
			}
			else{
			console.log("check down");
			console.log("current grid is " + " x: " + x + " and " + " y: " + y + " value " + player);
				if(grid[y][x] == player && grid[y][x] > 0){
					count++;
					return checkStraightDown(y+1, x, player);
					}
				else
					resetWin();
					return 0;
			}
		}
		
		function check(x, y, player){
			if(x >= 0 && y == 5){
			console.log("else if 0");
				checkStraightUp(y, x, player);
				checkStraightRight(y, x, player);
				checkStraightLeft(y, x, player);
				checkDiagonalLeftUp(y, x, player);
				checkDiagonalRightUp(y, x, player);
				console.log("***");
			}
				
			else if(x >= 0 && y == 0){
				console.log("else if 1");
				checkStraightDown(y, x, player);
				checkStraightLeft(y, x, player);
				checkStraightRight(y, x, player);
				checkDiagonalLeftDown(y, x, player);
				checkDiagonalRightDown(y, x, player);
				console.log("***");
			}
				
			else if (x == 0 && y >= 0){
				console.log("else if 2");
				checkStraightUp(y, x, player);
				checkStraightDown(y, x, player);
				checkStraightRight(y, x, player);
				checkDiagonalRightDown(y, x, player);
				checkDiagonalRightUp(y, x, player);
				console.log("***");
			}
				
			else if (x == 6 && y >= 0){
				console.log("else if 3");
				checkStraightDown(y, x, player);
				checkStraightUp(y, x, player);
				checkStraightLeft(y, x, player);
				checkDiagonalLeftDown(y, x, player);
				checkDiagonalLeftUp(y, x, player);
				console.log("***");
			}
				
			else{
				console.log("else");
				checkStraightUp(y, x, player);
				checkStraightDown(y, x, player);
				checkStraightLeft(y, x, player);
				checkStraightRight(y, x, player);
				checkDiagonalLeftDown(y, x, player);
				checkDiagonalRightDown(y, x, player);
				checkDiagonalLeftUp(y, x, player);
				checkDiagonalRightUp(y, x, player);
				console.log("***");
			}
		}
		
		function claimCircle(x, y, player){
			grid[y][x] = player;
			console.log("Value at " + "x: " + x + " and y: " + y + " is " + grid[y][x]);
			check(x, y, grid[y][x]);
		}
		
		function draw(x, y, color){
			ctx.beginPath();
			ctx.arc(x,y,40,0,2*Math.PI);
			ctx.stroke();
			ctx.fillStyle = color;
			ctx.fill();
		}
		
		function reset(){
			rowLimit = 0;
		}
		
		function click1(){
			if(rowLimit <= 6){
				x = 50;
				y1 = y1 - 100; 
				placeholder = togglePlayers();
				draw(x, y1, color);
				claimCircle(0, (y1-50)/100, placeholder);
				rowLimit++;
			}
			else
				reset();
		}
		
		function click2(){
			if(rowLimit <= 6){
				x = 150;
				y2 = y2 - 100; 
				placeholder = togglePlayers();
				draw(x, y2, color);
				claimCircle(1, (y2-50)/100, placeholder);
				rowLimit++;
			}
			else
				reset();
		}
		
		function click3(){
			if(rowLimit <= 6){
				x = 250;
				y3 = y3 - 100; 
				placeholder = togglePlayers();
				draw(x, y3, color);
				claimCircle(2, (y3-50)/100, placeholder);
				rowLimit++;
			}
			else
				reset();
		}
		
		function click4(){
			if(rowLimit <= 6){
				x = 350;
				y4 = y4 - 100; 
				placeholder = togglePlayers();
				draw(x, y4, color);
				claimCircle(3, (y4-50)/100, placeholder);
				rowLimit++;
			}
			else
				reset();
		}
		
		function click5(){
			if(rowLimit <= 6){
				x = 450;
				y5 = y5 - 100; 
				placeholder = togglePlayers();
				draw(x, y5, color);
				claimCircle(4, (y5-50)/100, placeholder);
				rowLimit++;
			}
			else
				reset();
		}
		
		function click6(){
			if(rowLimit <= 6){
				x = 550;
				y6 = y6 - 100; 
				placeholder = togglePlayers();
				draw(x, y6, color);
				claimCircle(5, (y6-50)/100, placeholder);
				rowLimit++;
			}
			else
				reset();
		}
		
		function click7(){
			if(rowLimit <= 6){
				x = 650;
				y7 = y7 - 100; 
				draw(x, y7, color);
				placeholder = togglePlayers();
				claimCircle(6, (y7-50)/100, placeholder);
				rowLimit++;
			}
			else
				reset();
		}
	