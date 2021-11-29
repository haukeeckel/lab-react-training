function IdCard({ firstName, lastName, picture, gender, height, birth }) {
  return (
    <div className="flex flex-row rounded shadow-md w-80 p-6 my-4">
      <img className="rounded-full shadow-md h-24 w-24" src={picture} alt="" />
      <div className="w-full pl-6 ">
        <div className="font-bold">
          {firstName} {lastName}
        </div>
        <div>{gender}</div>
        <div>{height} cm</div>
        <div>{birth.toLocaleDateString()}</div>
      </div>
    </div>
  );
}

export default IdCard;
