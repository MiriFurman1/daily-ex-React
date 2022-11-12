function Name({ namesArr }) {
  return (
    <div className='names'>
      <h2>All Names</h2>
      <div>
        {namesArr.map((name) => (
          <h3>{name}</h3>
        ))}
      </div>
    </div>
  );
}

export default Name;
