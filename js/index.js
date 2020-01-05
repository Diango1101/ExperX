function Index(localhost) {
    this.localhost = localhost
}
Index.prototype.kcb = function(data) {
    // console.log(data)
    return ` 
    <p class='text'> <strong>实验室房间号：</strong>${data.lab} <strong>
    使用时间：</strong>${data.use_time}<strong>使用人：</strong>${data.lab_user}</p>`
}
Index.prototype.zwwj = function(data) {
    // console.log('dfsajhdbsajhbduis', data)
    return ` 
    <p class='text'> <strong>设备序号：</strong>${data.id} <strong>所属学院：</strong>${data.col} <strong>设备名称：</strong>${data.name}</p>`
}
Index.prototype.sbqk = function(data) {
    // console.log('dfsajhdbsajhbduis', data)
    return ` 
    <p class='text'> <strong>设备序号：</strong>${data.id} <strong>所属学院：</strong>${data.col} <strong>设备状态：</strong>${data.status}</p>`
}

Index.prototype.sbqkxf = function(data) {
    // console.log('dfsajhdbsajhbduis', data)
    return ` 
    <p class='text'> <strong>设备序号：</strong>${data.id} <strong>所属学院：</strong>${data.col} </p>`
}
Index.prototype.yhpsh = function(data) {
    // console.log('dfsajhdbsajhbduis', data)
    return ` 
<p class='text'> <strong>设备序号：</strong>${data.id} <strong>所属学院：</strong>${data.col} <strong>使用次数：</strong>${data.use_num} <strong>是否审核：</strong>${data.check}<button type="button"  class="login-button" onclick="$.get('http://192.168.101.37:3000/plan_consumble/ischeck?id=${data.id}&col=${data.col}', data => {
    window.location.href='index.html#id5'
})">确认审核</button>
</p>
`
}
Index.prototype.xhhzb = function(id, data) {
    // console.log('dfsajhdbsajhbduis', data)
    return ` 
    <p class='text'> <strong>序号：</strong>${id} <strong>计划消耗：</strong>${data.plannum} <strong>实际消耗：</strong>${data.reanum}  <strong>消耗比：</strong>${data.num}</p>`
}
Index.prototype.updatezwwj = function(arr, $list) {
    var _this = this
    var html = ''
    if (arr) {
        arr.map(function(item) {
            html += _this.zwwj(item)
        })
        $list.empty().append(html)
        console.log(html);

    } else {
        html = `<p class="text"><strong>暂无相关数据</strong></p>`
        $list.empty().append(html)
    }
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
Index.prototype.updatesbqk = function(arr, $list) {
    var _this = this
    var html = ''
    if (arr) {
        arr.map(function(item) {
            html += _this.sbqk(item)
        })
        $list.empty().append(html)
    } else {
        html = `<p class="text"><strong>暂无相关数据</strong></p>`
        $list.empty().append(html)
    }
}
Index.prototype.updatesbqkxf = function(arr, $list) {
    var _this = this
    var html = ''
    if (arr) {
        arr.map(function(item) {
            html += _this.sbqkxf(item)
        })
        $list.empty().append(html)
    } else {
        html = `<p class="text"><strong>暂无相关数据</strong></p>`
        $list.empty().append(html)
    }
}
Index.prototype.updateyhsh = function(arr, $list) {
    var _this = this
    var html = ''
    if (arr) {
        arr.map(function(item) {
            html += _this.yhpsh(item)
        })
        $list.empty().append(html)
    } else {
        html = `<p class="text"><strong>暂无相关数据</strong></p>`
        $list.empty().append(html)
    }
}
i = 0
Index.prototype.updatexhhzb = function(data, $list, id) {
    if (i === 0) {
        $list.empty()
        i = 1
    }
    // console.log(typeof($list))
    var _this = this
    var html = ''
    if (data) {
        html += _this.xhhzb(id, data)
    } else {
        html = `<p class="text"><strong>暂无相关数据</strong></p>`
    }
    $list.append(html)
}

Index.prototype.idlist1 = function(data) {
    // console.log('dfsajhdbsajhbduis', data)
    return data.id
}
Index.prototype.idlist = function(arr, $list) {
    var _this = this
    var idlist = []
    if (arr) {
        arr.map(function(item) {
            // html += _this.yhpsh(item)
            idlist.push(_this.idlist1(item))
        })
        return idlist
    } else {
        console.log('idlist获取错误');

    }
}