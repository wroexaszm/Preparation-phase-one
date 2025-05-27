/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/


function squareNumber(num) {
  //code here
  if(num < 3){
    return 'Minimal input adalah 3'
  }

  let newArr = []
  let angka = 0;

  // Membuat array 2D dengan angka berurutan
  for(let i = 0; i < num; i++){
    let arrIsi = []
    for(let j = 0; j < num; j++){
      angka += 1
      arrIsi.push(angka)
    }
    newArr.push(arrIsi)
  }

  for(let i = 1; i < newArr.length; i += 2){
    newArr[i].reverse()
  }

  for(let i = 0; i < newArr.length; i++){
    for(let j = 0; j < newArr[i].length; j++){
      if(newArr[i][j] % 4 == 0){
        newArr[i][j] = '#'
      } else if(newArr[i][j] % 2 == 0){
        newArr[i][j] = 'o'
      } else if(newArr[i][j] % 2 == 1){
        newArr[i][j] = 'x'
      }
    }
  }

  return newArr


}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ 
//   [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, o, x, #, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, x ] 
// ]

console.log(squareNumber(2)); // Minimal input adalah 3