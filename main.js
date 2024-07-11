// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

//yechim:
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

//yechim
let str1 = Number("12");

console.log(typeof str1);

//3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

//yechim:
let random = Math.floor(Math.random() * 100);

if (random % 2 === 0) {
  console.log(`${random} soni juft son`);
} else {
  console.log(`${random} soni toq son`);
}

// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

//yechim:
let word = prompt("soz kiriting!");

word.toUpperCase();

if (word === "mars") {
  console.log(word);
} else {
  console.log("mars it school");
}

// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring

//yechim:
let mevalar = ["anor", "anjir", "nok", "apelsin", "kiwi"];
let sort = [];

for (let value of mevalar) {
  console.log(value);

  if (value.length >= 5) {
    sort.push(value);
  }
}

console.log(sort);
// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`Juft son: ${i}`);
  } else {
    console.log(`Toq son: ${i}`);
  }
}
