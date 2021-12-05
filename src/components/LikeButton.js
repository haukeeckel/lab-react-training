import { useState } from 'react';

function LikeButton() {
  let [curLikes, setLikes] = useState(0);

  const likes = () => {
    setLikes(curLikes + 1);
  };

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let randColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <button style={{ backgroundColor: randColor }} onClick={likes}>
      Likes {curLikes}
    </button>
  );
}

export default LikeButton;
