// GANTI DENGAN URL VERCEL KAMU: https://nama‑proyek.vercel.app/api/kirim
const URL_BACKEND = "https://nama‑proyek.vercel.app/api/kirim";

const form = document.getElementById("formDaftar");
const pesanBox = document.getElementById("pesan");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    pesanBox.innerText = "Sedang mengirim...";
    pesanBox.className = "";

    const data = {
        nama: document.getElementById("nama").value,
        usernameTg: document.getElementById("usernameTg").value,
        linkSosmed: document.getElementById("linkSosmed").value,
        followers: document.getElementById("followers").value,
        deskripsi: document.getElementById("deskripsi").value
    };

    try {
        const res = await fetch(URL_BACKEND,{
            method:"POST",
            headers:{"Content‑Type":"application/json"},
            body:JSON.stringify(data)
        })
        const hasil = await res.json();
        if(hasil.sukses){
            pesanBox.innerText = "✅ Pendaftaran terkirim! Tunggu konfirmasi";
            pesanBox.className = "sukses";
            form.reset();
        }else{
            pesanBox.innerText = "❌ " + hasil.pesan;
            pesanBox.className = "gagal";
        }
    } catch(err){
        pesanBox.innerText = "❌ Error jaringan / backend belum aktif";
        pesanBox.className = "gagal";
    }
})