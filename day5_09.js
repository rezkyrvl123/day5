// const angka = [4,5,6,7,8];
// const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu'];
// const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon'];
const people = [
    { id: 1, name: 'Udin', age: 12 },
    { id: 2, name: 'Wati', age: 51 },
    { id: 3, name: 'Budi', age: 34 },
    { id: 4, name: 'Agus', age: 16 },
    { id: 5, name: 'Sari', age: 19 },
    { id: 6, name: 'Ririn', age: 21 },
  ]
// for (i=0; i<100; i++){
//     if (i%2==1){
//         console.log(i);
//     }
// }
// stuff.unshift("Handuk")
// stuff.push("Celana")
// fruits.splice(2,1);
const orang = people.filter(orang => orang.age < 21);
console.log(orang);