import React from "react";
import { Link } from "react-router-dom";

function MpanIndicator(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${props.Mpan.MpanIndicator}`}></Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${props.Mpan.MpanIndicator.Meters}`}>
            {props.MpanIndicator.Meters}
          </Link>
        </h3>
        <div className="font-bold mb-3">$ {props.Meters.Pos}</div>
        <div className="mb-3">{props.Meters.Credit}</div>
        <Link
          to={`/products/${props.MpanIndicator.Meters}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default MpanIndicator;
