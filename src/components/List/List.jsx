import "./List.css";

export const List = ({ data, title }) => {
  return (
    <div className="wrapper">
      <h2 className="title">{}</h2>

      <ul className={s.list}>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
