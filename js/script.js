function login() {
    if (form1.username.value == '') {
        alert('用户名不能为空！');
        return false;
    }
    if (form1.password.value == '') {
        alert('密码不能为空！');
        return false;
    }
    if (form1.username.value == 'admin' && form1.password.value == 'admin') {
        alert('登录成功！')
        window.location.href = "index.html";
    } else {
        alert('用户名或密码错误，请重试！')
        return false
    }
    // form1.action="#";
    // form1.submit();
}
window.onload = function() {
    var i3 = document.getElementsByClassName('input_3');
    for (var i = 0; i < i3.length; i++) {
        i3[i].onmouseover = function() {
            this.style.backgroundColor = "#23271F";
            this.style.color = "#fff";
        }
        i3[i].onmouseout = function() {
            this.style.backgroundColor = "#fff";
            this.style.color = "#23271F";
        }
    }
    var pass = document.getElementById("password");
    pass.onfocus = function() {
        pass.type = "password";
    }
}