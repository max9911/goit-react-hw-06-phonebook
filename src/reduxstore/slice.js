import { createSlice, nanoid } from '@reduxjs/toolkit';
const storageData = JSON.parse(localStorage.getItem('contacts'));
const initialState = {
  contactInfo: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filterName: null,
};

if (storageData && storageData.length > 0) {
  initialState.contactInfo = storageData;
}

const contactsSlice = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    addContact: (state, { payload: { name, number } }) => {
      const contacts = state.contactInfo;

      const newContact = { name, number, id: nanoid() };

      const ifExist = contacts.find(
        el => el.name.toLowerCase() === name.toLowerCase()
      );
      if (ifExist) {
        return alert(`${name} is already in contacts.`);
      } else {
        state.contactInfo.push(newContact);

        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    },
    filterContacts: (state, { payload }) => {
      state.filterName = payload;
      console.log('filter', payload, state);
    },
    deleteContact: (state, { payload }) => {
      const contacts = state.contactInfo;

      state.contactInfo = contacts.filter(elm => elm.name !== payload);
      localStorage.setItem('contacts', JSON.stringify(state.contactInfo));
    },
  },
});

export const { addContact, filterContacts, deleteContact } =
  contactsSlice.actions;

export const contacsR = contactsSlice.reducer;
