const generateContacts = async (number) => {};

generateContacts(5);
const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact'); // Ця функція має бути у вашому шаблоні проєкту

async function generateContacts(count) {
  try {
    // Зчитуємо існуючі контакти
    const existingContacts = await readContacts();

    // Генеруємо нові контакти
    const newContacts = [];
    for (let i = 0; i < count; i++) {
      const contact = createFakeContact();
      newContacts.push(contact);
    }

    // Об'єднуємо існуючі та нові контакти
    const updatedContacts = existingContacts.concat(newContacts);

    // Записуємо оновлений масив контактів у файл
    await writeContacts(updatedContacts);

    console.log(`Було додано ${count} нових контактів. Загальна кількість: ${updatedContacts.length}`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
}

// Викликаємо функцію при запуску
const count = parseInt(process.argv[2], 10) || 5; // Кількість контактів передається з командного рядка або за замовчуванням 5
generateContacts(count);