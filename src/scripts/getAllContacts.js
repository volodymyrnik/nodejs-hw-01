import { readContacts } from '../utils/readContacts.js';

async function getAllContacts() {
  try {
    const contacts = await readContacts();
    console.log('Список всіх контактів:', contacts);
    console.log(`Загальна кількість контактів: ${contacts.length}`);
    return contacts;
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error);
  }
}

getAllContacts();