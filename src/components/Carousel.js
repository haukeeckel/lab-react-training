import { useState } from 'react';

function Carousel({ imgs }) {
  let index = 0;

  let [curIndex, setImage] = useState(index);

  const handlePrev = () => {
    if (curIndex === 0) {
      curIndex = imgs.length - 1;
    } else {
      --curIndex;
    }

    setImage(curIndex);
  };

  const handleNext = () => {
    if (curIndex === imgs.length - 1) {
      curIndex = 0;
    } else {
      ++curIndex;
    }

    setImage(curIndex);
  };

  return (
    <div className="flex flex-row">
      <button onClick={handlePrev}>Prev</button>
      <img src={imgs[curIndex]} alt="" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Carousel;
