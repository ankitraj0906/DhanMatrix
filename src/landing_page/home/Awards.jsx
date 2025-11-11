import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        {" "}
        <div className="col-6 p-5">
          <img src="Media/largestBroker.svg" />
        </div>
        <div className="col-6 p-5">
          <h1>Largest Broker in india</h1>
          <p className="mb-5">
            2 million+ clients contribute to over 15% of all retail order
            volumes in india daily by trading by trading annd investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>{" "}
                <li>
                  <p>Commudity and derative </p>
                </li>{" "}
                <li>
                  <p>Currency Deratives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPO</p>
                </li>{" "}
                <li>
                  <p>Direct Mutual Fund </p>
                </li>{" "}
                <li>
                  <p>Bond and Govt. Securitites</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="Media/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
