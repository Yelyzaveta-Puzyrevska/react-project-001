export const List = ({ data }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
