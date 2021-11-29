function Random({ min, max }) {
  let rand = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <>
      <p>
        Random value between {min} and {max} = {rand}{' '}
      </p>
    </>
  );
}

export default Random;
