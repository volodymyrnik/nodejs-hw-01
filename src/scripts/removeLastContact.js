// src/scripts/removeLastContact.js

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

async function removeLastContact() {
  try {
    // Зчитуємо існуючі контакти
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контакти відсутні. Видаляти нічого.');
      return;
    }

    // Видаляємо останній контакт
    const removedContact = contacts.pop();

    // Записуємо оновлений масив у файл
    await writeContacts(contacts);

    console.log(`Був видалений останній контакт:`, removedContact);
    console.log(`Загальна кількість контактів після видалення: ${contacts.length}`);
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
  }
}

removeLastContact();
