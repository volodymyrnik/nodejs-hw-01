// src/scripts/removeAllContacts.js

import { writeContacts } from '../utils/writeContacts.js';

async function removeAllContacts() {
  try {
    const emptyContacts = [];

    await writeContacts(emptyContacts);

    console.log('Усі контакти успішно видалено.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
  }
}

removeAllContacts();
