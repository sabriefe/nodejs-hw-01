import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  const contacts = await readContacts();

  const newContacts = Array.from({ length: number }, () => {
    return createFakeContact();
  });

  await writeContacts([...contacts, ...newContacts]);
};

generateContacts(5);
