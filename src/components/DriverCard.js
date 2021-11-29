import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="flex flex-row rounded-xl shadow-xl w-96 p-6 my-8 bg-indigo-700">
      <img className="rounded-full shadow-md h-24 w-24" src={img} alt="" />
      <div className="pl-6 text-white">
        <h2 className="text-xl font-bold">{name}</h2>
        <Rating>{rating}</Rating>
        <p className="font-light">
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
