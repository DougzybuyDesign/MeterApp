import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  // Create  API:https://tech-test-api.azurewebsites.net/meterpoints
  const url = `https://tech-test-api.azurewebsites.net/meterpoints`;
  let MpanIndicator = useAxiosGet(url);

  let Meter = [1];

  if (Meter.error) {
    Meter = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this error. Please remember to create your own{" "}
          <a href="https://tech-test-api.azurewebsites.net/meterpoints">
            mock API
          </a>
          .
        </div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (Meter.loading) {
    Meter = <Loader></Loader>;
  }

  if (Meter.data) {
    Meter = Meter.data.map((Meter) => (
      <div
        key={MpanIndicator.Meter}
        className="flex-no-shrink w-full md:w-1/4 md:px-3"
      >
        <ProductCard product={Meter} />
      </div>
    ));
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mb-3">Meter Points</h1>
      <div className="md:flex flex-wrap md:-mx-3">{MpanIndicator}</div>
    </div>
  );
}

export default Home;
