import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first-always</h2>
          <p className="text-muted">
            We put your goals and experience at the center of everything we do.
          </p>
          <h2 className="fs-4">No spam or gimmicks </h2>
          <p className="text-muted">
            Only real insights — no tricks, no noise, just value.
          </p>
          <h2 className="fs-4">User Friendly</h2>
          <p className="text-muted">
            Simple, clean, and easy to use so you can focus on trading smarter.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            Get the clarity and tools you need to grow and manage your wealth
            wisely.
          </p>
        </div>
        <div className="col-6">
          <img src="Media/ecosystem.png" style={{ width: "85%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
