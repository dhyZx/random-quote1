"use strict";
const quotes = [
        "Sampai detik ini kamu masih menjadi alasan kenapa hatiku belum mau menerima siapa pun.",
        "Sekeras apapun aku berlari dari kenyataan. Sekeras apapun aku berlari dari takdir. Sekeras apapun aku mencari jawaban dari semua pertanyaan, jawaban dari semua itu cuma ada satu yaitu kau hanya aku yang terlambat tahu.",
        "Waktu adalah satu-satunya yang dapat menyembuhkan patah hati. ~Taylor Swift",
        "Sembuhkan dulu hatimu sebelum memulai kisah yang baru lagi.",
        "Cinta bukanlah soal fisik yang sempurna, melainkan hati dan penerimaan seutuhnya.",
        "Seandainya tidak ada badai, pelangi tidak akan muncul. Untuk itu, belajarlah dari badai yang menimpamu.",
        "Aku bukan pelampiasan di saat pemeran utama tidak ada.",
        "Berharap dan dikasih harapan itu sama sama sakit, kau tahu sakitnya karena apa? Karena harapan itu belum tentu sesuai dengan kenyataan.",
        "Semua bisa berakhir, orang berubah. Dan kamu tahu apa? Hidup kan terus berjalan.",
        "Karena hati tak perlu memilih, ia selalu tahu kemana harus berlabuh. ~Dee Lestari",
        "Udah tiga hari gak makan apa-apa. Soalnya gak ada yg ngingetin aku makan. ~Raditya Dika",
        "Dan sebenarnya, pacar orang adalah pacar kita juga, karena kita juga kan orang. ~Cak Lontong",
        "Cinta itu memang buta, tapi cinta tidak tuli. Cinta bisa bedakan mana suara honda jazz dengan honda supra.",
        "Mereka bilang cinta itu lebih penting dari uang, tapi pernahkan kamu membayar tagihan pakai pelukan?",
        "Hewan qurban aja dikorbanin lehernya ga sampai putus. Masa hubungan kita udah banyak berkorban akhirnya tetap putus. ~Babe Cabita",
        "Pacarku bilang aku gila, tapi anehnya dia mau sama saya.",
        "Bukannya aku nggak laku, tapi aku adalah jomblo bertahan yang hebat.",
        "Kamu adalah seseorang yang tidak akan pernah aku lupakan dalam hidupku. Karena kamu masih punya utang kepadaku.",
        "Tong sampah saja ada banyak isinya, masak hati aku satu saja nggak ada isinya.",
        "Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.",
        "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja.",
        "Cara dia ngelihat cinta akan berbeda semenjak patah hati itu. ~Raditya Dika",
        "Denganmu, jatuh cinta adalah patah hati paling sengaja. ~Wira Nagara",
        "Barangkali Tuhan sedang tidak ingin kamu jatuh cinta. Agar kamu bisa mencintai dirimu lebih lama. ~Boy Chandra",
        "Bukannya aku tidak ingin menjadi pacarmu. Aku hanya ingin dipersatukan dengan cara yang benar.",
        "Lebih baik sendiri daripada berdua tapi tanpa kepastian.",
        "Maaf aku lupa ternyata aku bukan siapa-siapa.",
        "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri.",
        "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa.",
        "Maaf aku lupa ternyata aku bukan siapa-siapa.",
        "Sebagai teman lama, mungkin aku tak tahu kabarmu sekarang. Tapi, teman barumu mungkin tidak mengerti kisah masa lalumu seperti aku.",
        "Jika kamu dapat melihat hanya aku yang mengerti dirimu. ~Taylor Swift",
        "Sulit bagiku untuk mengatakan bahwa aku cemburu dengan caramu bahagia tanpaku. ~Labrinth",
        "Aku seharusnya tidak cemburu, karena kamu bahkan bukan milikku.",
        "Aku ga cemburu. Aku cuma ga suka ada orang lain yang bikin kamu ketawa selain aku. ~Radit & Jani",
        "Kita seperti domino. Aku jatuh padamu, dan kamu jatuh ke orang lain.",
        "Hal terberat yang aku lalui adalah melihatmu ada di pelukannya.",
        "Kamu adalah ketidakmungkinan yang aku semogakan.",
        "Sekilas mungkin aku terlihat tersenyum di matamu. Tapi sebenarnya hati ini menangis pilu melihat kamu dengan dia.",
        "Kecemburuan adalah perasaan cinta dan benci pada saat yang bersamaan. ~Drake"
    ]

const getRandomNumber = number => Math.floor(Math.random() * number)

const getRandomQuote = () => quotes[getRandomNumber(quotes.length)]

const printQuote = () => {
  const randomQuote = getRandomQuote();
  let HTML = '';
        HTML += `<p class="quote">${randomQuote}</p>`;
        HTML += `<p class="source">dyy.`;
  document.getElementById('quote-box').innerHTML = HTML;
}

const changeBackground = () => {
  document.body.style.backgroundColor = `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}

const autoChange = setInterval(printQuote, 20000);

document.getElementById('loadQuote').addEventListener("click", changeBackground, false);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);