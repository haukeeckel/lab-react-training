import { useState } from 'react';

function Dice() {
  let [curDice, setDice] = useState(3);

  let dice = `./assets/images/dice${curDice}.png`;

  let handleClick = () => {
    setDice((curDice = '-empty'));
    setTimeout(() => setDice(Math.floor(Math.random() * 6 + 1)), 1000);
  };

  return (
    <img
      className="w-28 cursor-pointer"
      onClick={handleClick}
      src={dice}
      alt=""
    />
  );
}

export default Dice;
