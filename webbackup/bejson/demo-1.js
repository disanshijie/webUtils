(function(obj) {
	zip.workerScriptsPath = "/static/bejson/othertools/zip/";
	var requestFileSystem = obj.webkitRequestFileSystem || obj.mozRequestFileSystem || obj.requestFileSystem;
	var fileInput = document.getElementById("fileSpan");
	var unzipProgress = document.createElement("progress");
	var fileList = document.getElementById("file-list");
	var creationMethodInput = document.getElementById("creation-method-input");
	function onerror(message) {
		alert(message);
	}

	function createTempFile(callback) {
		var tmpFilename = "http://www.bejson.com/static/bejson/othertools/zip/tmp.dat";
		requestFileSystem(TEMPORARY, 4 * 1024 * 1024 * 1024, function(filesystem) {
			function create() {
				filesystem.root.getFile(tmpFilename, {
					create : true
				}, function(zipFile) {
					callback(zipFile);
				});
			}

			filesystem.root.getFile(tmpFilename, null, function(entry) {
				entry.remove(create, create);
			}, create);
		});
	}

	var model = (function() {
		

		return {
			getEntries : function(file, onend) {
				zip.createReader(new zip.BlobReader(file), function(zipReader) {
					zipReader.getEntries(onend);
				}, onerror);
			},
			getEntryFile : function(entry, creationMethod, onend, onprogress) {
				var writer, zipFileEntry;

				function getData() {
					entry.getData(writer, function(blob) {
						var blobURL = creationMethod == "Blob" ? URL.createObjectURL(blob) : zipFileEntry.toURL();
						onend(blobURL);
					}, onprogress);
				}

				if (creationMethod == "Blob") {
					writer = new zip.BlobWriter();
					getData();
				} else {
					createTempFile(function(fileEntry) {
						zipFileEntry = fileEntry;
						writer = new zip.FileWriter(zipFileEntry);
						getData();
					});
				}
			}
		};
	})();
	function ozip(fs){
		
		
		
		model.getEntries(fs[0], function(entries) {
			fileList.innerHTML = "";
			fileName = fs[0].name+".txt";
			entries.forEach(function(entry) {
				var li = document.createElement("li");
				var a = document.createElement("a");
				a.textContent = entry.filename;
				a.href = "#";
				a.addEventListener("click", function(event) {
					if (!a.download) {
						download(entry, li, a);
						event.preventDefault();
						return false;
					}
				}, false);
				li.appendChild(a);
				$("#contentt").append(entry.filename+"\n");
				fileList.appendChild(li);
			});
		});
	
	}
	function download(entry, li, a) {
		model.getEntryFile(entry, creationMethodInput.value, function(blobURL) {
			var clickEvent = document.createEvent("MouseEvent");
			if (unzipProgress.parentNode)
				unzipProgress.parentNode.removeChild(unzipProgress);
			unzipProgress.value = 0;
			unzipProgress.max = 0;
			clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			a.href = blobURL;
			a.download = entry.filename;
			a.dispatchEvent(clickEvent);
		}, function(current, total) {
			unzipProgress.value = current;
			unzipProgress.max = total;
			li.appendChild(unzipProgress);
		});
	}
	$(function() {
		

		
		if (typeof requestFileSystem == "undefined")
			creationMethodInput.options.length = 1;
		$("#fileSpan").on('drop', function(ev){
			var fs = ev.originalEvent.dataTransfer.files;
			ozip(fs)
			
		});
		
		$("#fileSpan").on('click', function(ev){
			$("#file-input").click();
			
		});
		$("#file-input").on('change', function(ev){
			
			ozip(this.files)
			
		});
	});

})(this);
var fileName = 'http://www.bejson.com/static/bejson/othertools/zip/bejson_zip.txt';
function saveTxt()
{
    	var ua = navigator.userAgent.toLowerCase();
		$fieName = $("#contentt").val()
	if(ua.match(/msie/))
	{
		var newwin = window.open('', '_blank', 'top=10000');
		newwin.document.open('text/html', 'replace');
		newwin.document.write($fieName);
    	newwin.document.execCommand('saveas','',fileName);
		newwin.close();
	}
	else
	{
		var a = document.createElement("a");
		var code = $fieName;
		a.href = "data:text/html;charset=utf8," + code;
		a.download = fileName;
		a.click();
	}
}
$(function(){
	
	//元素
	var oFileBox = $(".fileBox");					//选择文件父级盒子
	var oFileInput = $("#fileInput");				//选择文件按钮
	var oFileSpan = $("#fileSpan");					//选择文件框


	
	
	//拖拽外部文件，进入目标元素触发
	oFileSpan.on("dragenter",function(){
		$(this).text("可以释放鼠标了！").css("background","#ccc");
	});

	//拖拽外部文件，进入目标、离开目标之间，连续触发
	oFileSpan.on("dragover",function(){
		return false;
	});

	//拖拽外部文件，离开目标元素触发
	oFileSpan.on("dragleave",function(){
		$(this).text("或者将文件拖到此处").css("background","none");
	});

	//拖拽外部文件，在目标元素上释放鼠标触发
	oFileSpan.on("drop",function(ev){
		var fs = ev.originalEvent.dataTransfer.files;
		
		$(this).text("或者将文件拖到此处").css("background","none");
		return false;
	});

	
	
	
})