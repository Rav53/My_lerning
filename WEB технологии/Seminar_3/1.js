function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
alert(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
alert(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

const age = Number.parseInt(prompt('Введите ваш возраст: '));
switch (age) {
    case 18:
        alert('Вы совершеннолетний, все можно!');
        break;
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert('Мы не знаем что Вам делать');
}

const a = Number.parseFloat(prompt("Введите число а: "));
const b = Number.parseFloat(prompt("Введите число b: "));
// alert(`Результат сложения чисел ${a} и ${b} равен ${a + b}`);

function sum(num1, num2) {
    // return a + b;
    alert(`Результат сложения чисел ${num1} и ${num2} равен ${(num1 + num2).toFixed(2)}`);
}
// alert(`Результат сложения чисел ${a} и ${b} равен ${sum(a, b)}`);
sum(a, b);

const userName = prompt("Введите имя: ");
function welcome(name) {
    alert(`Привет, ${name}`);
}
welcome(userName);
