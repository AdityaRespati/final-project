
function myFunction() {
    var headerHemat = document.getElementById("headerHemat")
    var headerDetak = document.getElementById("headerDetak")
    var headerRisiko = document.getElementById("headerRisiko")
    var headerAngka = document.getElementById("headerAngka")

    headerHemat.innerHTML ="Uang yang bisa anda hemat dalam setahun"
    headerDetak.innerHTML = "Detak jantung telah kembali normal sebesar"
    headerRisiko.innerHTML = "Risiko penyakit jantung telah berkurang sebesar"
    headerAngka.innerHTML = "Angka harapan hidup telah bertambah sebanyak"

    var jumlah = document.getElementById("jumlah")
    var harga = document.getElementById("harga")
    var jumlahPerBungkus = document.getElementById("jumlah-per-bungkus")
    var waktu = document.getElementById("waktu")

    var hemat = document.getElementById("hemat")
    var numHemat = Math.round((harga.value / jumlahPerBungkus.value)) * jumlah.value * 365
    var strHemat = ""
    var strNumHemat = String(numHemat)

    for (var i = 0; i < strNumHemat.length; i++) {
        if ((strNumHemat.length - i) % 3 === 0 && i !== 0) {
            strHemat += "." + strNumHemat[i]
        } else {
            strHemat += strNumHemat[i]
        }
    }

    hemat.innerHTML = "Rp " + strHemat + ", 00"

    var detak = document.getElementById("detak") 

    if(waktu.value < 1){
        detak.innerHTML= "0 %"
    } else if(waktu.value > 1){
        detak.innerHTML =  "100 %"
    } else{
        detak.innerHTML =  "50 %"
    }

    var risiko = document.getElementById("risiko")
    if(waktu.value >=365){
        risiko.innerHTML = "100%"
    }   else{
        risiko.innerHTML = Math.round(waktu.value/365*100) + '%'
    }

    var angka = document.getElementById("angka")
    angka.innerHTML = waktu.value + " hari"


}

