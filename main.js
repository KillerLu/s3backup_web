
function getPagination(total,currentPage) {
    var pages= Math.ceil(total / 10);
    var str=""
    str += "<ul class='pageWrap'>"
    for(i = 1;i < pages + 1; i++){
        var _class = 'pageWrapli '
        if(i == currentPage)
        {
            _class += 'active'
        }
        console.log(_class,111)
        str += "<li><span class='" + _class + "'>" + i + "</span></li>"
    }
    str += "</ul>"
    // str += "<span>共：" + pages+ "页</span> &nbsp;";
    // str += "<span>当前第：" +  currentPage + "页</span> &nbsp;";
    $("#pager").html(str);
    var list = document.getElementsByClassName("pageWrapli")
    for (var i = 0; i < list.length; i++) {
        var li = list[i];
        li.onclick= (function (index) {
            return function () { search($("#ceph_name").val(), index + 1) };
        })(i);
    }
}