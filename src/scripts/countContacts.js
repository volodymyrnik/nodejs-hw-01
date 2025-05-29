const { readContacts } = require('../utils/readContacts');

async function countContacts() {
  try {
    // Зчитуємо масив контактів з файлу
    const contacts = await readContacts();

    // Отримуємо кількість контактів
    const count = contacts.length;

    // Виводимо кількість у консоль
    console.log(`Кількість контактів: ${count}`);

    return count;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error);
    return 0; // Повертаємо 0 у разі помилки
  }
}

// Викликаємо функцію при запуску
countContacts();