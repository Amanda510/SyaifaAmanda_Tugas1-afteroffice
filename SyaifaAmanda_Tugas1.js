//Fungsi untuk menentukan kategori usia
function kategori (usia) {
    if (usia >= 0 && usia <= 12) {
        return 'Anak-anak';
    } else if (usia >= 13 && usia <= 17) {
        return 'Remaja';
    } else if (usia >= 18 && usia <= 59) {
        return 'Dewasa';
    } else if (usia >= 60) {
        return 'Lansia';
    } else {
        return 'Usia tidak valid';
    }
}

//Data usia
const dataUsia = [1,54,12,17,20,45,80,76,18,-1];

//Klasifikasi usia
let anak = 0, remaja = 0, dewasa = 0, lansia = 0;

for (let i = 0; i < dataUsia.length; i++) {
    let kategoriUsia = kategori(dataUsia[i]);

    switch (kategoriUsia) {
        case 'Anak-anak':
            anak++;
            break;
        case 'Remaja':
            remaja++;
            break;
        case 'Dewasa':
            dewasa++;
            break;
        case 'Lansia':
            lansia++;
            break;
        default:
            console.log(`Usia tidak valid: ${dataUsia[i]}`);
    }
}

//Print hasil
console.log(`Anak-anak: ${anak} orang`);
console.log(`Remaja: ${remaja} orang`);
console.log(`Dewasa: ${dewasa} orang`);
console.log(`Lansia: ${lansia} orang`);
