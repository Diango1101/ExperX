$(document).ready(function() {
    var index = new Index('http://192.168.101.37:3000')
    console.log('dfasdasds')
    $.get(`${index.localhost}/l_course`, data => {
        index.updatekcb(data, $('.kcb'))
        console.log('kcb载入成功')
    })
})