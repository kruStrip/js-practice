/**
 * Задание #1
 * Функция заменяет большие буквы на маленькие, маленькие на большие,
 * а цифры на знак нижнего подчёркивания.
 */

function swapCase(str) {
  let result = '';

  for (const char of str) {
    if (char >= '0' && char <= '9') {
      result += '_';
    } else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += char.toLowerCase();
    } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }

  return result;
}

// Демонстрация работы
console.log(swapCase('Hello World 123'));   // hELLO wORLD ___
console.log(swapCase('JavaScript2026'));    // jAVAsCRIPT____
console.log(swapCase('Привет Мир 456'));    // пРИВЕТ мИР ___
console.log(swapCase('ABCdef'));            // abcDEF
