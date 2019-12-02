function Index(localhost) {
    this.localhost = localhost
}
Index.prototype.kcb = function(data) {
    console.log(data)
    return ` 
    <p class='text'> <strong>实验室房间号：</strong>${data.lab} <strong>
    使用时间：</strong>${data.use_time}<strong>使用人：</strong>${data.lab_user}</p>`
}
Index.prototype.updatekcb = function(arr, $list) {
    var _this = this
    var html = ''
    if (arr) {
        arr.map(function(item) {
            html += _this.kcb(item)
        })
        $list.empty().append(html)
    } else {
        html = `<p class="text"><strong>暂无相关数据</strong></p>`
        $list.empty().append(html)
    }
}