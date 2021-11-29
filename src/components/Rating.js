function Rating({ children }) {
  let text =
    '★'.repeat(Math.round(children)) + '☆'.repeat(5 - Math.round(children));
  return (
    <>
      <p className="text-4xl">{text}</p>
    </>
  );
}

export default Rating;
