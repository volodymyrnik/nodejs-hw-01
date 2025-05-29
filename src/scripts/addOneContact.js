const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact'); // Функція для генерації одного контакту

async function addOneContact() {
  try {
    // Зчитуємо існуючі контакти
    const existingContacts = await readContacts();

    // Генеруємо один новий контакт
    const newContact = createFakeContact();

    // Додаємо його до існуючих контактів
    existingContacts.push(newContact);

    // Записуємо оновлений масив у файл
    await writeContacts(existingContacts);

    console.log(`Було додано новий контакт:`, newContact);
    console.log(`Загальна кількість контактів: ${existingContacts.length}`);
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error);
  }
}

// Викликаємо функцію при запуску
addOneContact();