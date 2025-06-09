import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

async function generateContacts(count) {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];

    for (let i = 0; i < count; i++) {
      const contact = createFakeContact();
      newContacts.push(contact);
    }

    const updatedContacts = existingContacts.concat(newContacts);
    await writeContacts(updatedContacts);

    console.log(`Було додано ${count} нових контактів. Загальна кількість: ${updatedContacts.length}`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
}

const count = parseInt(process.argv[2], 10) || 5;
generateContacts(count);