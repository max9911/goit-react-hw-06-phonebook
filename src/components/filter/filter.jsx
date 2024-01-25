import css from './filter.module.css';

const Filter = ({ filter }) => {
  const filterHandler = ({ target: { value } }) => {
    filter(value);
  };

  return (
    <div className={css.container}>
      <h3> Find contacts by name </h3>
      <input onChange={filterHandler} name="filter" type="text"></input>
    </div>
  );
};

export default Filter;
