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
  // Sudah diubah jadi 1 loop saja
  for(let i = 0; i < noSpace.length; i++){
    sum += noSpace[i].length
  }

  let rata = Math.round(sum / noSpace.length)

  let newArr = []
  for(let i = 0; i < noSpace.length; i++){
    if(noSpace[i].length === rata){
        newArr.push(noSpace[i])
    }
  }

  return newArr

}
console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you'] //harusnya 'want', karena pembulatan rata-rata 3.5 itu 4 *correct me if i'm wrong sir hehe
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []