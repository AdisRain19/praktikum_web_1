function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert('Anda Berhasil Login');
        window.location="./admin/kelola.html"
        return false
    }
    else if (username == "" || password == ""){
        alert('Username atau Password Tidak Boleh Kosong')
    }
    else{
        alert('Username atau Password salah')
    }
}