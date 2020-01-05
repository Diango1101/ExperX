$(document).ready(function() {
    $("#submitkcb").click(function() {

        var targetUrl = $("#addkcb").attr("action");
        var data = $("#addkcb").serialize();
        $.ajax({
            type: 'get',
            url: targetUrl,
            cache: false,
            data: data,
            dataType: 'json',
            success: function(data) {
                alert('实验室课程表添加成功');
                $("#addkcb input").each(function() {
                    $(this).val('');
                });
            },
            error: function() {
                alert("实验室课程表录入失败")
            }
        })

    })
})