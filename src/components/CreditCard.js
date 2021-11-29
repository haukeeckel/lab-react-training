import imgVisa from '../assets/images/visa.png';
import imgMaster from '../assets/images/master-card.svg';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let cardType = '';
  if (type === 'Visa') {
    cardType = imgVisa;
  } else if (type === 'Master Card') {
    cardType = imgMaster;
  }

  let cardNumber = number.replace(
    /\b[\dX][-. \dX]+(\d{4})\b/g,
    '•••• •••• •••• $1'
  );

  let cardColor = {
    backgroundColor: bgColor,
  };

  return (
    <div
      className="flex flex-col w-72 p-4 rounded-md shadow-xl"
      style={cardColor}
    >
      <img className="h-7 p-1 self-end mb-4" src={cardType} alt="" />
      <p className="text-3xl self-center mb-4">{cardNumber}</p>
      <div className="flex flex-row w-64">
        <span className="pr-6 text-sm">
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span className="text-sm">{bank}</span>
      </div>
      <p className="text-sm mb-1">{owner}</p>
    </div>
  );
}

export default CreditCard;
