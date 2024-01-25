import AddForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';
import { nanoid } from 'nanoid';
import Filter from './filter/filter';
import { useEffect, useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(null);
  const [filterKeys, setFilterKeys] = useState('');

  const addContact = (name, number) => {
    const newContact = { name, number, id: nanoid() };

    const ifExist = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (ifExist) {
      return alert(`${name} is already in contacts.`);
    } else {
      setContacts(prev => [...prev, newContact]);
    }
  };

  const filter = filterName => {
    setFilterKeys(filterName);
  };

  const delBtn = nameDel => {
    setContacts(contacts.filter(elm => elm.name !== nameDel));
  };

  useEffect(() => {
    const initialData = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const storageData = JSON.parse(localStorage.getItem('contacts'));
    console.log(storageData);

    if (storageData && storageData.length > 0) {
      setContacts(storageData);
    } else {
      setContacts(initialData);
      localStorage.setItem('contacts', JSON.stringify(initialData));
    }
  }, []);

  useEffect(
    prev => {
      if (prev !== contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    },
    [contacts]
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <AddForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} />
      {contacts && (
        <ContactList arr={contacts} filter={filterKeys} delBtn={delBtn} />
      )}
    </div>
  );
};

export default App;
