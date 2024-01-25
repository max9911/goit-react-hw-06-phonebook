import { useSelector } from 'react-redux';
import css from './contactList.module.css';
import ContactElem from 'components/contactElem/contactElem';

export default function ContactList({ arr, delBtn }) {
  const filter = useSelector(state => state.filterName);
  if (filter) {
    const result = arr.filter(el => {
      const aaa = el.name.toLowerCase();
      return aaa.includes(filter);
    });

    return (
      <div className={css.container}>
        {result.map(elm => (
          <ContactElem
            key={elm.id}
            name={elm.name}
            number={elm.number}
            delBtn={delBtn}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={css.container}>
        {arr.map(elm => (
          <ContactElem
            key={elm.id}
            name={elm.name}
            number={elm.number}
            delBtn={delBtn}
          />
        ))}
      </div>
    );
  }
}
