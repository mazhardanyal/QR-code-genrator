let imgbox=document.getElementById("imagebox");
let qrimage=document.getElementById("qrimage");
let qrtext=document.getElementById("qrtext");


function GenerateQR(){

    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}
