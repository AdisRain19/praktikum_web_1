// buat fungsi
// ambil nilai username
// ambil nilai password
// cek username dan password benar dengan yang kita tentukan atau tidak
// jika benar berikan alert berhasil login dan arahkan ke file index
// jika password dan usernmae kosong 
// maka berikan alert kosong
// jika password dan usernmae salah
// tampilkan  username dan password salah

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert('Anda Berhasil Login');
        window.location="index.html"
        return false
    }
    else if (username == "" || password == ""){
        alert('Username atau Password Tidak Boleh Kosong')
    }
    else{
        alert('Username atau Password salah')
    }
}