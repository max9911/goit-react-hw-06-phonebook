import AddForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';

import Filter from './filter/filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, filterContacts } from 'reduxstore/slice';

const App = () => {
  const contacts = useSelector(state => state.contactInfo);

  const dispatch = useDispatch();

  const addContactOld = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const filter = filterName => {
    dispatch(filterContacts(filterName));
  };

  const delBtn = nameDel => {
    dispatch(deleteContact(nameDel));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <AddForm addContact={addContactOld} />

      <h2>Contacts</h2>
      <Filter filter={filter} />
      {contacts && <ContactList arr={contacts} delBtn={delBtn} />}
    </div>
  );
};

export default App;
