let User_Name = sessionStorage.getItem("User_Name");

if (User_Name == "" || User_Name == null) {
    //未登录
    window.location = "./login/";
} else if (User_Name != "" && User_Name != null) {
    //登录
    console.log("Successful automatic login!");
} 