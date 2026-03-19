/**
 * Задание #4
 * Класс Circle (окружность):
 * - поле, хранящее радиус
 * - get/set свойство для радиуса
 * - get свойство для диаметра
 * - метод вычисления площади
 * - метод вычисления длины окружности
 */

class Circle {
  #radius;

  constructor(radius) {
    this.radius = radius; // используем set-свойство для валидации
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error('Радиус должен быть положительным числом');
    }
    this.#radius = value;
  }

  get diameter() {
    return this.#radius * 2;
  }

  getArea() {
    return Math.PI * this.#radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.#radius;
  }
}

// Демонстрация работы
const circle = new Circle(5);

console.log(`Радиус: ${circle.radius}`);
console.log(`Диаметр: ${circle.diameter}`);
console.log(`Площадь: ${circle.getArea().toFixed(2)}`);
console.log(`Длина окружности: ${circle.getCircumference().toFixed(2)}`);

// Изменяем радиус через set-свойство
circle.radius = 10;
console.log('\nПосле изменения радиуса на 10:');
console.log(`Радиус: ${circle.radius}`);
console.log(`Диаметр: ${circle.diameter}`);
console.log(`Площадь: ${circle.getArea().toFixed(2)}`);
console.log(`Длина окружности: ${circle.getCircumference().toFixed(2)}`);

// Попытка задать отрицательный радиус
try {
  circle.radius = -3;
} catch (e) {
  console.log(`\nОшибка: ${e.message}`);
}
