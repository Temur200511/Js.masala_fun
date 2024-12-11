// FunSimple4: Teng tomonli uchburchak yuzasi va perimetri
// function Triangle() {
//     let a = parseFloat(prompt("Uchburchak tomonini kiriting:"));
//     let P = 3 * a;
//     let S = (Math.sqrt(3) / 4) * a * a;
//     alert(`Perimetr: ${P}, Yuzasi: ${S}`);
// }



// function InvertDigit() {
//     let n = parseInt(prompt("Sonni kiriting:"));
//     let result = parseInt(n.toString().split('').reverse().join(''), 10);
//     alert(`Teskarisi: ${result}`);
// }

// function DigitCountSum() {
//     let n = parseInt(prompt("Sonni kiriting:"));
//     let raqamlar = n.toString().split('').map(Number);
//     let soni = raqamlar.length;
//     let yigindi = raqamlar.reduce((a, b) => a + b, 0);
//     alert(`Raqamlar soni: ${soni}, Yig'indisi: ${yigindi}`);
// }

// function QuadraticRoots() {
//     let A = parseFloat(prompt("A ni kiriting:"));
//     let B = parseFloat(prompt("B ni kiriting:"));
//     let C = parseFloat(prompt("C ni kiriting:"));
//     let D = B * B - 4 * A * C;
//     if (D < 0) alert("Ildizlar soni: 0");
//     else if (D === 0) alert("Ildizlar soni: 1");
//     else alert("Ildizlar soni: 2");
// }

// function Even() {
//     let K = parseInt(prompt("Sonni kiriting:"));
//     alert(K % 2 === 0 ? "Juft" : "Toq");
// }

// function IsPowerN() {
//     let K = parseInt(prompt("K ni kiriting:"));
//     let N = parseInt(prompt("N ni kiriting:"));
//     while (K > 1 && K % N === 0) {
//         K /= N;
//     }
//     alert(K === 1 ? "True" : "False");
// }

// function IncTime() {
//     let H = parseInt(prompt("Soatni kiriting (H):"));
//     let M = parseInt(prompt("Minutni kiriting (M):"));
//     let S = parseInt(prompt("Sekundni kiriting (S):"));
//     let T = parseInt(prompt("Qancha sekund qo'shishni istaysiz (T):"));
//     let totalSeconds = H * 3600 + M * 60 + S + T;
//     let yangiH = Math.floor(totalSeconds / 3600) % 24;
//     let yangiM = Math.floor((totalSeconds % 3600) / 60);
//     let yangiS = totalSeconds % 60;
//     alert(`Yangi vaqt: ${yangiH} soat, ${yangiM} minut, ${yangiS} sekund`);
// }






// FunSimple4: Teng tomonli uchburchak yuzasi va perimetri
function Triangle() {
    let a = parseFloat(prompt("Uchburchak tomonini kiriting:"));
    let P = 3 * a;
    let S = (Math.sqrt(3) / 4) * a * a;
    alert(`Perimetr: ${P}, Yuzasi: ${S}`);
}


// FunSimple7: Butun musbat sonning raqamlarini teskari chiqarish
// function InvertDigit() {
//     let n = parseInt(prompt("Sonni kiriting:"));
//     let result = parseInt(n.toString().split('').reverse().join(''), 10);
//     alert(`Teskarisi: ${result}`);
// }

// // FunSimple6: Raqamlar soni va yig'indisi
// function DigitCountSum() {
//     let n = parseInt(prompt("Sonni kiriting:"));
//     let raqamlar = n.toString().split('').map(Number);
//     let soni = raqamlar.length;
//     let yigindi = raqamlar.reduce((a, b) => a + b, 0);
//     alert(`Raqamlar soni: ${soni}, Yig'indisi: ${yigindi}`);
// }

// // FunSimple17: Kvadrat tenglama ildizlarini aniqlash
// function QuadraticRoots() {
//     let A = parseFloat(prompt("A ni kiriting:"));
//     let B = parseFloat(prompt("B ni kiriting:"));
//     let C = parseFloat(prompt("C ni kiriting:"));
//     let D = B * B - 4 * A * C;
//     if (D < 0) alert("Ildizlar soni: 0");
//     else if (D === 0) alert("Ildizlar soni: 1");
//     else alert("Ildizlar soni: 2");
// }

// // FunSimple24: Juft yoki toqligini aniqlash
// function Even() {
//     let K = parseInt(prompt("Sonni kiriting:"));
//     alert(K % 2 === 0 ? "Juft" : "Toq");
// }

// // FunSimple27: Sonning boshqa son darajasi ekanini tekshirish
// function IsPowerN() {
//     let K = parseInt(prompt("K ni kiriting:"));
//     let N = parseInt(prompt("N ni kiriting:"));
//     while (K > 1 && K % N === 0) {
//         K /= N;
//     }
//     alert(K === 1 ? "True" : "False");
// }

// // FunSimple51: Vaqtni oshirish
// function IncTime() {
//     let H = parseInt(prompt("Soatni kiriting (H):"));
//     let M = parseInt(prompt("Minutni kiriting (M):"));
//     let S = parseInt(prompt("Sekundni kiriting (S):"));
//     let T = parseInt(prompt("Qancha sekund qo'shishni istaysiz (T):"));
//     let totalSeconds = H * 3600 + M * 60 + S + T;
//     let yangiH = Math.floor(totalSeconds / 3600) % 24;
//     let yangiM = Math.floor((totalSeconds % 3600) / 60);
//     let yangiS = totalSeconds % 60;
//     alert(`Yangi vaqt: ${yangiH} soat, ${yangiM} minut, ${yangiS} sekund`);
// }
