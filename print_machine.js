/**
 * Задание #3
 * Класс PrintMachine:
 * - размер шрифта
 * - цвет шрифта
 * - семейство шрифта
 * - метод print(), который принимает текст и печатает его
 *   соответствующим шрифтом с помощью document.write()
 *
 * Для запуска откройте print_machine.html в браузере.
 */

class PrintMachine {
  constructor(fontSize, fontColor, fontFamily) {
    this.fontSize = fontSize;
    this.fontColor = fontColor;
    this.fontFamily = fontFamily;
  }

  print(text) {
    document.write(
      `<p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily};">${text}</p>`
    );
  }
}

// Демонстрация работы
const printer1 = new PrintMachine('24px', 'blue', 'Arial');
printer1.print('Привет, мир! Это текст шрифтом Arial, синий, 24px.');

const printer2 = new PrintMachine('18px', 'red', 'Georgia');
printer2.print('Это текст шрифтом Georgia, красный, 18px.');

const printer3 = new PrintMachine('32px', 'green', 'Courier New');
printer3.print('Это текст шрифтом Courier New, зелёный, 32px.');
