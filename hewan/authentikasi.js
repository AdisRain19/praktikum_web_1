

function AuthenticationAlert() {
    
}

function image_picker() {
    const list_image = ["singa.png", "paus.png", "kelinci.png", "zebra.png", "sapi.png"];
    let pilihan = document.getElementById("opsi").value;

    if (pilihan == "singa") {
        alert("ini adalah gambar singa");
        let select = list_image[0];
        document.getElementById("gambar").src = `images/${select}`;
    }

    if (pilihan == "paus") {
        alert("ini adalah gambar paus");
        let select = list_image[1];
        document.getElementById("gambar").src = `images/${select}`;
    }

    if (pilihan == "kelinci") {
        alert("ini adalah gambar kelinci");
        let select = list_image[2];
        document.getElementById("gambar").src = `images/${select}`;
    }

    if (pilihan == "zebra") {
        alert("ini adalah gambar zebra");
        let select = list_image[3];
        document.getElementById("gambar").src = `images/${select}`;
    }

    if (pilihan == "sapi") {
        alert("ini adalah gambar sapi");
        let select = list_image[4];
        document.getElementById("gambar").src = `images/${select}`;
    }

}
