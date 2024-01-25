const ContactElem = ({ name, number, delBtn }) => {
  //   console.log(delBtn);
  return (
    <>
      <li>
        {name}: {number}
      </li>
      <button onClick={() => delBtn(name)}>Delete contact</button>
    </>
  );
};

export default ContactElem;
