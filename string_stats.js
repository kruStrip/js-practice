/**
 * Задание #2
 * Функция принимает строку и выводит статистику о ней:
 * количество символов, слов, предложений, букв, цифр,
 * пробелов и знаков пунктуации.
 */

function stringStats(str) {
  const totalChars = str.length;
  const words = str.trim() === '' ? 0 : str.trim().split(/\s+/).length;
  const sentences = (str.match(/[.!?]+/g) || []).length;

  let letters = 0;
  let digits = 0;
  let spaces = 0;
  let punctuation = 0;
  let upperCase = 0;
  let lowerCase = 0;

  for (const char of str) {
    if (/[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]/.test(char)) {
      letters++;
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        upperCase++;
      } else {
        lowerCase++;
      }
    } else if (char >= '0' && char <= '9') {
      digits++;
    } else if (char === ' ' || char === '\t' || char === '\n') {
      spaces++;
    } else if (/[.,!?;:'"()\-–—…]/.test(char)) {
      punctuation++;
    }
  }

  console.log('=== Статистика строки ===');
  console.log(`Строка: "${str}"`);
  console.log(`Всего символов: ${totalChars}`);
  console.log(`Слов: ${words}`);
  console.log(`Предложений: ${sentences}`);
  console.log(`Букв: ${letters}`);
  console.log(`  - заглавных: ${upperCase}`);
  console.log(`  - строчных: ${lowerCase}`);
  console.log(`Цифр: ${digits}`);
  console.log(`Пробелов: ${spaces}`);
  console.log(`Знаков пунктуации: ${punctuation}`);
}

// Демонстрация работы
stringStats('Hello, World! This is JavaScript 2026. How are you?');
console.log('');
stringStats('Привет, Мир! Это тест 123.');
