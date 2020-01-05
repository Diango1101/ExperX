$(document).ready(function() {
    var index = new Index('http://192.168.101.37:3000')
    console.log('dfasdasds')
    $.get(`${index.localhost}/l_course`, data => {
        index.updatekcb(data, $('.kcb'))
        console.log('kcb载入成功')
    })
    $.get(`${index.localhost}/p_factor`, data => {
        index.updatezwwj(data, $('.zhangcontent'))
        console.log('账务文件载入成功')
    })
    $.get(`${index.localhost}/f_process`, data => {
        index.updatesbqk(data, $('.equipchayue'))
        // console.log('账务文件载入成功')
        // console.log('设备情况', data)
    })
    $.get(`${index.localhost}/f_process/selectByStatus?status=0`, data => {
        index.updatesbqkxf(data, $('.sunhuai'))
        // console.log('账务文件载入成功')
        // console.log('设备情况', data)
    })
    $.get(`${index.localhost}/f_process/selectByStatus?status=1`, data => {
        index.updatesbqkxf(data, $('.weixiu'))
        // console.log('账务文件载入成功')
        // console.log('设备情况', data)
    })
    $.get(`${index.localhost}/f_process/selectByStatus?status=2`, data => {
        index.updatesbqkxf(data, $('.yixiuli'))
        // console.log('账务文件载入成功')
        // console.log('设备情况', data)
    })
    $.get(`${index.localhost}/plan_consumble`, data => {
        index.updateyhsh(data, $('.yihaosh'))
        // console.log('账务文件载入成功')
        console.log('易耗品审核', data)
    })
    $.get(`${index.localhost}/plan_consumble`, data => {
        var list = index.idlist(data)
        // console.log('账务文件载入成功')
        console.log('idlist', list)
        list.map(
            (item) => {
                $.get(`${index.localhost}/useclick?id=${item}`, data => {
                    console.log(data);

                    index.updatexhhzb(data, $('.huizong'), item)
                    // console.log('账务文件载入成功')
                    console.log('审核报表', data)
                })
            })

    })
})