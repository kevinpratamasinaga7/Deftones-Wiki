$(document).ready(function(){
    // Menambahkan pengguliran halus ke semua tautan
    $("a").on('click', function(event) {
  
      // Memastikan this.hash memiliki nilai sebelum mengesampingkan perilaku bawaan
      if (this.hash !== "") {
        // Mencegah perilaku klik anchor bawaan
        event.preventDefault();
  
        // Simpan hash
        var hash = this.hash;
  
        // Menggunakan metode animate() jQuery untuk menambahkan gulir halaman yang mulus
        // Nomor opsional (800) menentukan jumlah milidetik yang diperlukan untuk menggulir ke area yang ditentukan
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Tambahkan hash (#) ke URL setelah selesai menggulir (perilaku klik default)
          window.location.hash = hash;
        });
      } // Akhir if
    });
  });