function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(ri, gi, bi) {
    return '#' + componentToHex(ri) + componentToHex(gi) + componentToHex(bi);
  }

  return (
    <div
      className="flex flex-col rounded shadow-md justify-center items-center w-80 p-6 my-4"
      style={divStyle}
    >
      <p className="text-lg font-bold">
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;
