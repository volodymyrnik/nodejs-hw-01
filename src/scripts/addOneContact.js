import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

async function addOneContact() {
  try {
    const existingContacts = await readContacts();

    const newContact = createFakeContact();

    existingContacts.push(newContact);

    await writeContacts(existingContacts);

    console.log(`Було додано новий контакт:`, newContact);
    console.log(`Загальна кількість контактів: ${existingContacts.length}`);
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error);
  }
}

addOneContact();