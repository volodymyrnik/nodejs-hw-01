const { writeContacts } = require('../utils/writeContacts');

async function removeAllContacts() {
  try {
    // Очищаємо масив контактів
    const emptyContacts = [];

    // Записуємо порожній масив у файл
    await writeContacts(emptyContacts);

    console.log('Усі контакти успішно видалено.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
  }
}

// Викликаємо функцію при запуску
removeAllContacts();