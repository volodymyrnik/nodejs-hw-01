import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error('Помилка при записі файлу:', error);
  }
};