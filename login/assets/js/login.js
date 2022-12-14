if (sessionStorage.getItem("User_Name") != "" && sessionStorage.getItem("User_Name") != null) {
    window.location = "../";
}

function login() {
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    for (let i = 0; i < User_Library.length; i++) {
        if (User_Library[i][0].toLowerCase() == Username.toLowerCase() || User_Library[i][2] == Username) {
            console.log(User_Library[i][0].toLowerCase() + "==" + Username.toLowerCase());
            console.log("用户名正确！");
            if (Password == User_Library[i][1]) {
                console.log(User_Library[i][1].toLowerCase() + "==" + Password.toLowerCase());
                console.log("密码正确！");
                sessionStorage.setItem("User_Name", User_Library[i][0]);
                window.location.reload();
                return;
            } else if (i == (User_Library.length - 1)) { alert("wrong password"); }
        } else if (i == (User_Library.length - 1)) {
            alert("username error");
        }
    }
}