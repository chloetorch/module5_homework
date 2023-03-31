let n = prompt("Введите число");
n = +n;
if (isNaN(n)) {
   alert('Упс, кажется, вы ошиблись.')
} else if (n % 2 === 0) {
   alert('Число четное')
} else {
   alert('Число нечетное')
}