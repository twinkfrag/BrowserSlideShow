var timerID;
var selectNum;
var list;

$(function() {
	$.getJSON("./img/list.json", function(data){
		list = $.map(data, function(x){
			return "./img/" + x;
		});
		makeThumb(list);
	});
	timerID = setInterval(function(){
		select((selectNum + 1) % $(".thumbnail").length);
	}, 10000);
});

function select(Num){
	$(".active").removeClass("active");
	selectNum = Num - 0;
	var $selectThumb = $(".thumbnail:eq(" + selectNum + ")");
	$(".view").attr("src", $selectThumb.attr("href"));
	$selectThumb.addClass("active");
}

function stop(){
	clearInterval(timerID);
}
var makeThumb = function(list){
	$.each(list, function(num, name){
	console.log("hoge");
		$(".thumbnail-list").append(
		$("<div />").addClass("col-md-1 data-frame")
		.append(
			$("<a />").addClass("thumbnail")
			.attr("href", name)
			.attr("data-num", ++num)
			.append(
				$("<img />").attr("src", name))
		       )
		)
	});
	$(".thumbnail").click(function(){
		select($(this).attr("data-num"));
		return false;
	});
}
/*
   for(var i; i<list.length; i++){
   var $img = $("<img />");
   $img.attr("src", "img/" + list[i]);
   $("body").append($img);
   }
   window.webkitRequestFileSystem(
   window.TEMPORARY,
   0,
   function(fs){
   fs.root.getDirection("img", {},
   function(dirEntry){
   var dirReader = dirEntry.createReader();
   dirReader.readEntrys(
   function(list){
   for(var i=0; i<list.length; i++){
   document.write(list[i]);
   console.log(list[i]);
   }
   });
   });
   });
   */

