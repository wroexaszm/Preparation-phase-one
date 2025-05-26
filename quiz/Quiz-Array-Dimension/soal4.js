/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  //code here

  let noSpace = words.match(/\w+/g)

  let sum = 0
  let per = 0
  for(let i = 0; i<noSpace.length; i++){
    let count = 0
    for(let j = 0; j<noSpace[i].length; j++){
        count+=1
    }
    per+=1
    sum+=count
  }

  let rata = Math.round(sum/per)

  let newArr = []
  for(let i = 0; i<noSpace.length; i++){
    if(noSpace[i].length === rata){
        newArr.push(noSpace[i])
    }
  }

  return newArr

}
console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []