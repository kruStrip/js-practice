/**
 * Задание #7
 * Программа запрашивает путь к файлу, слово для поиска и слово для замены.
 * Выполняет замену и выводит отчёт о количестве замен.
 *
 * Запуск: node file_replace.js
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise(resolve => {
    rl.question(question, answer => resolve(answer));
  });
}

async function main() {
  try {
    const filePath = await ask('Введите путь к файлу: ');
    const searchWord = await ask('Введите слово для поиска: ');
    const replaceWord = await ask('Введите слово для замены: ');

    if (!fs.existsSync(filePath)) {
      console.log(`Ошибка: файл "${filePath}" не найден.`);
      rl.close();
      return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    // Подсчитываем количество вхождений
    const regex = new RegExp(searchWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    const count = matches ? matches.length : 0;

    if (count === 0) {
      console.log(`\nСлово "${searchWord}" не найдено в файле.`);
    } else {
      const newContent = content.replace(regex, replaceWord);
      fs.writeFileSync(filePath, newContent, 'utf-8');

      console.log('\n=== Отчёт ===');
      console.log(`Файл: ${filePath}`);
      console.log(`Искомое слово: "${searchWord}"`);
      console.log(`Слово для замены: "${replaceWord}"`);
      console.log(`Количество замен: ${count}`);
      console.log('Замена выполнена успешно!');
    }
  } catch (error) {
    console.log(`Ошибка: ${error.message}`);
  } finally {
    rl.close();
  }
}

main();
