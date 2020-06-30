
function getPagination() {
    var pages= Math.ceil(101 / 10);
    var str=""
    str += "<ul class='pageWrap'>"
    for(i = 1;i < pages + 1; i++){
        str += "<li><span class='pageWrapli'>" + i + "</span></li>"
    }
    str += "</ul>"
    str += "<span>总共：" + pages+ "页</span> &nbsp;";
    str += "<span>当前第：" +  $("#page").val()+ "页</span> &nbsp;";
    $("#pager").html(str);
    var list = document.getElementsByClassName("pageWrapli")
    for (var i = 0; i < list.length; i++) {
        var li = list[i];
        li.onclick= (function (index) {
            return function () { search(index + 1) };
        })(i);
    }
}