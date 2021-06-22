import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function MpanIndicators() {
  const { Mpan } = useParams();
  // Creating the API
  const url = `https://tech-test-api.azurewebsites.net/meterpoints/${MpanIndicators}`;

  let MpanIndicators = useAxiosGet(url);

  let Meters = null;

  if (Mpan.error) {
    Meters = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this error. Please Check link{" "}
          <a href="https://tech-test-api.azurewebsites.net/meterpoints">
            Meter api
          </a>
          .
        </div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (Mpan.loading) {
    Meters = <Loader></Loader>;
  }

  if (Mpan.Meters) {
    Meters = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{Mpan.MpanIndicator.Meters}</h1>

        <div className="font-bold text-xl mb-3">
          $ {Mpan.MpanIndicator.meterType}
        </div>
        <div>{Mpan.MpanIndicator.numberOfRegisters}</div>
      </div>
    );
  }

  return <div className="container mx-auto">{Meters}</div>;
}

export default MpanIndicators;
