// Memulai game
const memulai = confirm("Apakah anda ingin memainkan game suit?");

// Kalo dia mau main
if (memulai == true) {
    do {
        // Menentukan pilihan player
        let player = prompt("Pilih : batu, gunting, kertas");
        var ulangi = true; //Looping ketika player salah/tidak menentukan pilihan dengan benar

        // Jika player menentukan pilihan dengan benar
        if (player == "batu" || player == "gunting" || player == "kertas") {
            // Membuat pilihan random computer
            let computer = Math.random();

            // Menentukan pilihan computer
            if (computer < 0.33) {
                computer = "batu";
            } else if (computer < 0.66) {
                computer = "gunting";
            } else {
                computer = "kertas";
            }
            // Rules permainan
            if (player == "batu" && computer == "kertas") {
                alert("Kamu memilih : " + player + "\nComputer memilih : " + computer + "\nHasil : kamu kalah!");
            } else if (player == "batu" && computer == "gunting") {
                alert("Kamu memilih : " + player + "\nComputer memilih : " + computer + "\nHasil : kamu menang!");
            } else if (player == "gunting" && computer == "batu") {
                alert("Kamu memilih : " + player + "\nComputer memilih : " + computer + "\nHasil : kamu kalah!");
            } else if (player == "gunting" && computer == "kertas") {
                alert("Kamu memilih : " + player + "\nComputer memilih : " + computer + "\nHasil : kamu menang!");
            } else if (player == "kertas" && computer == "gunting") {
                alert("Kamu memilih : " + player + "\nComputer memilih : " + computer + "\nHasil : kamu kalah!");
            } else if (player == "kertas" && computer == "batu") {
                alert("Kamu memilih : " + player + "\nComputer memilih : " + computer + "\nHasil : kamu menang!");
            } else {
                alert("Kamu memilih : " + player + "\nComputer memilih : " + computer + "\nHasil : seri!");
            }
            var ulangi = confirm("Apakah anda ingin bermain lagi?");
            if (ulangi == false) {
                // Kalo dia udahan
                // Keluar dari game
                alert("Sampai jumpa!");
            }
        } else {
            // Jika player salah/tidak menentukan pilihan dengan benar
            alert("OPPS, terjadi kesalahan!");
        }
    } while (ulangi == true);
} else {
    // Kalo dia gamau main
    // Keluar dari game
    alert("Sampai jumpa!");
}
