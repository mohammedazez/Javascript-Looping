var repeat = confirm("Apakah anda mau mengulang");
var counter = 0;
do {
  counter++;
  repeat = confirm("Apakah anda mau mengulang");
} while (repeat);

document.write("Perulangan sudah dilakukan sebanyak" + counter + "kali");
