(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(2),i=t.n(s),c=t(3),o=t(4),d=t(6),l=t(5),u=t(7),m=(t(13),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(d.a)(this,Object(l.a)(a).call(this))).clicked=function(a){if(!e.state.gameEnded&&!e.state.gameLocked){""===e.state.board[a.dataset.square]&&(e.state.board[a.dataset.square]=e.state.turn,a.innerText=e.state.turn,"O"===a.innerText&&a.classList.add("AI-color"),e.state.turn="X"===e.state.turn?"O":"X","X"===e.state.turn?e.setState({winnerLine:"Your Turn...!"}):e.setState({winnerLine:"AI is playing...!"}),e.state.totalMoves++);var t=e.checkWinner();"X"===t?(e.state.gameEnded=!0,e.setState({winner:"X",winnerLine:"X wins the game!"})):"O"===t?(e.state.gameEnded=!0,e.setState({winner:"O",winnerLine:"O wins the game!"})):"draw"===t&&(e.state.gameEnded=!0,e.setState({winner:"draw",winnerLine:"It's draw!"})),"O"!==e.state.turn||e.state.gameEnded||(e.state.gameLocked=!0,setTimeout(function(){do{var a=Math.floor(9*Math.random())}while(""!==e.state.board[a]);e.state.gameLocked=!1,e.clicked(document.querySelectorAll(".square")[a])},300))}},e.checkWinner=function(){for(var a=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]],t=e.state.board,n=0;n<a.length;n++)if(t[a[n][0]]===t[a[n][1]]&&t[a[n][1]]===t[a[n][2]])return t[a[n][0]];if(console.log(e.state.totalMoves),9===e.state.totalMoves)return"draw"},e.playAgain=function(){e.setState({winnerLine:"Let's play...!",winner:void 0,turn:"X",gameLocked:!1,gameEnded:!1,board:Array(9).fill(""),totalMoves:0}),document.querySelectorAll(".square").forEach(function(e){e.innerText="",e.classList.remove("AI-color")})},e.state={winnerLine:"Let's play...!",winner:null,turn:"X",gameLocked:!1,gameEnded:!1,board:Array(9).fill(""),totalMoves:0},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"game"},r.a.createElement("div",{id:"head"},r.a.createElement("span",{id:"tic"},"Tic"),"-",r.a.createElement("span",{id:"tac"},"Tac"),"-",r.a.createElement("span",{id:"toe"},"Toe")," in ",r.a.createElement("span",{id:"react"},"React")),r.a.createElement("div",{id:"board",onClick:function(a){return e.clicked(a.target)}},r.a.createElement("div",{className:"square","data-square":"0"}),r.a.createElement("div",{className:"square","data-square":"1"}),r.a.createElement("div",{className:"square","data-square":"2"}),r.a.createElement("div",{className:"square","data-square":"3"}),r.a.createElement("div",{className:"square","data-square":"4"}),r.a.createElement("div",{className:"square","data-square":"5"}),r.a.createElement("div",{className:"square","data-square":"6"}),r.a.createElement("div",{className:"square","data-square":"7"}),r.a.createElement("div",{className:"square","data-square":"8"})),r.a.createElement("div",{id:"status"},this.state.winnerLine),this.state.gameEnded?r.a.createElement("button",{className:"play-btn",onClick:function(){return e.playAgain()}},"Play Again"):"")}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.b59e83ae.chunk.js.map