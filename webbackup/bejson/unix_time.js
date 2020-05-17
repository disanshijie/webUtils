function timestamp(){
    setInterval("$('#now_timestamp').val(Math.round(new Date().getTime()/1000));",1000);
    function timestamptostr(timestampStr) {
		var  timestamp = parseInt(timestampStr);
		
		if(timestampStr.length<11){
			timestamp = timestampStr * 1000;
		}
		console.log(timestampStr.length);
         d = new Date(timestamp);
		 console.log(d);
		 var _month = d.getMonth()+1;
		 if(_month<10){
		 	_month = "0"+_month;
		 }
		 
		 var _date = d.getDate();
		 if(_date<10){
		 	_date = "0"+_date;
		 } 
		 
		 var _hour = d.getHours();
		 if(_hour<10){
		 	_hour = "0"+_hour;
		 }
		 
		 var _minite = d.getMinutes();
		 if(_minite<10){
		 	_minite = "0"+_minite;
		 }
		 
		 var _sec = d.getSeconds();
		 if(_sec<10){
		 	_sec = "0"+_sec;
		 }
		 
         //var jstimestamp = (d.getFullYear())+"-"+(d.getMonth()+1)+"-"+(d.getDate())+" "+(d.getHours())+":"+(d.getMinutes())+":"+(d.getSeconds())+":"+(d.getMilliseconds());
         var jstimestamp = (d.getFullYear())+"-"+_month+"-"+_date+" "+_hour+":"+_minite+":"+_sec;
         return jstimestamp;
    }
    $('#unixtime').val(Math.round(new Date().getTime()/1000));

    $('#toGMT').click(function(){
        $('#result_GMT').val(timestamptostr($('#unixtime').val()));
    })
    
    var now_strTime = timestamptostr(Math.round(new Date().getTime()/1000)+"");
    var arr = new Array();
    arr = now_strTime.split(' ');
	console.log(now_strTime);
    YMD = arr[0].split('-');
    HIS = arr[1].split(':');
    $('#year').val(YMD[0]);
    $('#month').val(YMD[1]);
    $('#day').val(YMD[2]);
    $('#hour').val(HIS[0]);
    $('#minute').val(HIS[1]);
    $('#second').val(HIS[2]);

    $('#toUNIX').click(function(){
        var utime = new Date(Date.UTC($('#year').val(), $('#month').val() - 1, $('#day').val(), $('#hour').val()-8, $('#minute').val(), $('#second').val()));
        $('#result_unix').val(utime.getTime()/1000);
    })
}

$(function(){
    timestamp();
})