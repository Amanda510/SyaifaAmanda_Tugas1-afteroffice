//Setup readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Fungsi operasi
function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b === 0) return 'Tidak bisa dibagi dengan nol!';
    return a / b;
}


//Kalkulator
console.log('=== Kalkulator Sederhana ===');
console.log('1. Penjumlahan');
console.log('2. Pengurangan');
console.log('3. Perkalian');
console.log('4. Pembagian');

rl.question('Pilih operasi (1–4): ', (pilih) => {
    const pilihan = parseInt(pilih);

    rl.question('Masukkan angka pertama: ', (input1) => {
        rl.question('Masukkan angka kedua: ', (input2) => {
            const angka1 = parseFloat(input1);
            const angka2 = parseFloat(input2);
            let hasil;

            switch (pilihan) {
                case 1:
                    hasil = tambah(angka1, angka2);
                    break;
                case 2:
                    hasil = kurang(angka1, angka2);
                    break;
                case 3:
                    hasil = kali(angka1, angka2);
                    break;
                case 4:
                    hasil = bagi(angka1, angka2);
                    break;
                default:
                    hasil = 'Pilihan tidak valid';
            }

            console.log(`Hasil: ${hasil}`);
            rl.close();
        });
    });
});