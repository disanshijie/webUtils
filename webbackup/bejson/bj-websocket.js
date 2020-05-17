function   formatDate(now)   {    
              var   year=now.getFullYear();     
              var   month=now.getMonth()+1;     
              var   date=now.getDate();     
              var   hour=now.getHours();     
              var   minute=now.getMinutes();     
              var   second=now.getSeconds();     
              return   year+"-"+(month=month<10?("0"+month):month)+"-"+(date=date<10?("0"+date):date)+" "+(hour=hour<10?("0"+hour):hour)+":"+(minute=minute<10?("0"+minute):minute)+":"+(second=second<10?("0"+second):second);     
   } 
var output;
var websocket;
function init() {
    output = document.getElementById("output");
    testWebSocket();
}

function addsocket() {
	var wsaddr = $("#wsaddr").val();
	if (wsaddr=='') {
		alert("请填写websocket的地址");
		return false;
	}
	StartWebSocket(wsaddr);
}

function closesocket() {
	websocket.close();
}

function StartWebSocket(wsUri) {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) }; }
	
    function onOpen(evt) { 
	   writeToScreen("<span style='color:red'>连接成功，现在你可以发送信息啦！！！</span>");
	}
    function onClose(evt) {
        writeToScreen("<span style='color:red'>websocket连接已断开!!!</span>");
		websocket.close();
	}
    function onMessage(evt) {
	   writeToScreen('<span style="color:blue">服务端回应&nbsp;'+formatDate(new Date())+'</span><br/><span class="bubble">'+ evt.data+'</span>');	
	}
    function onError(evt) {
        writeToScreen('<span style="color: red;">发生错误:</span> '+ evt.data);
	}
    function doSend() {
	    var message=$("#message").val();
		if (message=='') {
			alert("请先填写发送信息");
			$("#message").focus();
			return false;
		}
		if (typeof websocket==="undefined"){
			alert("websocket还没有连接，或者连接失败，请检测");
			return false;
		}
		if (websocket.readyState==3) {
			alert("websocket已经关闭，请重新连接");
			return false;
		}
		console.log(websocket);
		$("#message").val('');
		writeToScreen('<span style="color:green">你发送的信息&nbsp;'+formatDate(new Date())+'</span><br/>'+ message);
        websocket.send(message);
		}

    function writeToScreen(message) {
      
       
        
		var div = "<div class='newmessage'>"+message+"</div>";
		var d = $("#output");
		var d=d[0];
        var doScroll = d.scrollTop == d.scrollHeight - d.clientHeight;
		$("#output").append(div);
        if (doScroll) {
            d.scrollTop = d.scrollHeight - d.clientHeight;
        }
		}

   
    function en(event){
		var evt=evt?evt:(window.event?window.event:null);
        if (evt.keyCode==13){
         doSend()
        }
	}
	
