import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {};
const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts');

async function writeContacts(contacts) {
  try {
    const data = JSON.stringify(contacts, null, 2); // Форматуємо JSON для зручності читання
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error('Помилка при записі файлу:', error);
  }
}

module.exports = { writeContacts };