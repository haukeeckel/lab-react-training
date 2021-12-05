function NumbersTable({ limit }) {
  let numbersArr = [];
  for (let i = 1; i <= limit; i++) {
    let number = {
      number: i,
      color: i % 2 ? 'white' : 'red',
    };
    numbersArr.push(number);
  }

  return (
    <div className="grid">
      {numbersArr.map((elem) => {
        return (
          <div style={{ backgroundColor: elem.color }}>
            {elem.number} - {elem.color}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
