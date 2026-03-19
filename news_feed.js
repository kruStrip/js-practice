/**
 * Задание #5
 * Класс NewsFeed (новостная лента):
 * - массив новостей
 * - get-свойство: количество новостей
 * - метод вывода всех новостей
 * - метод добавления новости
 * - метод удаления новости
 * - метод сортировки по дате (от новых к старым)
 * - метод поиска по тегу
 */

class News {
  constructor(title, text, date, tags = []) {
    this.title = title;
    this.text = text;
    this.date = date instanceof Date ? date : new Date(date);
    this.tags = tags;
  }

  toString() {
    const dateStr = this.date.toLocaleDateString('ru-RU');
    return `[${dateStr}] ${this.title}\n  ${this.text}\n  Теги: ${this.tags.join(', ')}`;
  }
}

class NewsFeed {
  #news;

  constructor() {
    this.#news = [];
  }

  get count() {
    return this.#news.length;
  }

  displayAll() {
    if (this.#news.length === 0) {
      console.log('Новостная лента пуста.');
      return;
    }
    console.log('=== Новостная лента ===');
    this.#news.forEach((item, index) => {
      console.log(`${index + 1}. ${item.toString()}`);
    });
    console.log(`Всего новостей: ${this.count}`);
  }

  addNews(title, text, date, tags = []) {
    const newsItem = new News(title, text, date, tags);
    this.#news.push(newsItem);
    console.log(`Добавлена новость: "${title}"`);
  }

  removeNews(index) {
    if (index < 0 || index >= this.#news.length) {
      console.log('Неверный индекс новости.');
      return;
    }
    const removed = this.#news.splice(index, 1);
    console.log(`Удалена новость: "${removed[0].title}"`);
  }

  sortByDate() {
    this.#news.sort((a, b) => b.date - a.date);
    console.log('Новости отсортированы по дате (от новых к старым).');
  }

  searchByTag(tag) {
    const found = this.#news.filter(item =>
      item.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    );
    return found;
  }
}

// Демонстрация работы
const feed = new NewsFeed();

feed.addNews(
  'Новый релиз JavaScript',
  'Вышла новая версия ECMAScript с важными обновлениями.',
  '2026-01-15',
  ['javascript', 'технологии']
);

feed.addNews(
  'Погода на неделю',
  'Ожидается тёплая и солнечная погода.',
  '2026-03-10',
  ['погода', 'прогноз']
);

feed.addNews(
  'Обновление Node.js',
  'Node.js 22 LTS теперь доступен для загрузки.',
  '2026-02-20',
  ['javascript', 'nodejs', 'технологии']
);

console.log(`\nКоличество новостей: ${feed.count}`);
feed.displayAll();

console.log('\n--- Сортировка по дате ---');
feed.sortByDate();
feed.displayAll();

console.log('\n--- Поиск по тегу "javascript" ---');
const results = feed.searchByTag('javascript');
results.forEach(item => console.log(item.toString()));

console.log('\n--- Удаление первой новости ---');
feed.removeNews(0);
feed.displayAll();
