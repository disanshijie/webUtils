function findBill(status12) {
	status = status12
}
$(function() {
	var status1 = 0;
	if (status != null) {
		status1 = status
	}
	var timestamp = Date.parse(new Date());
	$.ajax({
		type: "post",
		async: false,
		url: "findMessages?t=" + new Date().getTime(),
		data: {
			param1: status1,
			time: timestamp,
			buyWay: "${param.buyWay}"
		},
		dataType: "json",
		success: function(data) {
			var OrderList = data.OrderList;
			oList = OrderList;
			sessionStorage.olist = new Object();
			sessionStorage.olist = OrderList;
			var thinglistMap = data.thinglistMap;
			tMap = thinglistMap;
			$("#ShoperOrderTable").html("<colgroup><col style='width:450px'><col style='width:120px'><col style='width:130px'><col style='width:150px'><col style='width:120px'></colgroup>
			$(OrderList).each(function(index) {
				var oid = this.orderid;
				var listthings = thinglistMap[oid];
				var Str = " < tr id = 'oh" + oid + "'class = "d0"style = "height:6px;background:#C1FFC1;" > <td colspan = '8' > <div > <span > 订单编号: " + this.orderid + " < /span> <span> 成交时间:" + this.ocreatetime + "</span > </div></td > </tr>";
				$("#ShoperOrderTable").append(Str);
				$("#ShoperOrderTable").append("<tr id='ta" + oid + "'><td id='othings" + oid + "'></td > <td valign = 'top'align = 'center' > <div style = 'margin-top:45px;' > <a href = 'javascript:void' > " + this.ousername + " < /a></div > </td><td valign='top' align='center'><div style='margin-top:36px;'>" + State[this.ostate] + "<br/ > <a href = 'javascript:xiangqing(" + index + ' > 订单详情 < /a><br/ > <a href = 'javascript:reply(" + index + ' > " + (State1[this.ostate] == null ? "": State1[this.ostate]) + " < /a><br/ > <a href = 'javascript:void' > " + (State2[this.ostate] == null ? "": 1) + " < /a></div > </td><td valign='top' align='center'><div style='margin-top:45px;'>" + this.oprice + "</div > </td><td valign='top' align='center'><div style='margin-top:45px;'><a href='javascript:odel(" + this.id + "," + $ {
					param.buyWay
				} + ")'>关闭订单</a > </div></td > </tr>
				creatething(listthings, oid);
			});
			function creatething(listthings, oid) {
				$("#othings" + oid).append("<ul id='tul" + oid + "' style='margin-top:10px;'></ul > $(listthings).each(function() {
				$("#tul" + oid).append("<li id='tli" + oid + "t" + this.thingsid + "' style='margin-top:15px;'><a href='findbyid?id=" + this.thingsid + "' target='_blank'><img src='" + this.thingslogo + "' style='border:solid 1px #458B00;width:70px;height:70px;'><div style='position:absolute;margin-top:-45px; margin-left:85px;'>" + this.thingsname + "</div></a><div style='position:absolute;margin-top:-45px; margin-left:385px;'></div><div style='position:absolute;margin-top:-45px; margin-left:295px;'>" + this.thingstag + "</div></li>
				});
			}
			var list = eval(OrderList) for (var i = 0; i < list.length; i++) {
				if (list[i].isdel == "2 " || list[i].isdel == "3 ") {
					$("#oh " + list[i].orderid).hide();
					$("#ta " + list[i].orderid).hide();
				};
			}
		},
		error: function(e, emessage, eobj) {
			alert(eobj + "错误啦 ! ")
		}
	})
});"