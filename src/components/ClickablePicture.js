import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  let [curImg, setImg] = useState(1);

  const handleClick = () => {
    setImg(!curImg);
  };

  return (
    <img
      className="w-28 cursor-pointer"
      onClick={handleClick}
      src={curImg ? img : imgClicked}
      alt=""
    />
  );
}

export default ClickablePicture;
