import React from "react";

function TeamMember() {
  return (
    <div className="container mb-5">
      <div
        className="row px-5 mt-5 mx-5  text-center text-muted"
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        <div className="col-4 p-0 text-center">
          <img
            src="media\images\Nikhil.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h5 className="mt-3">Nikhil Kamath</h5>
          <h6>Co-founder, CFO</h6>
        </div>
        <div className="col-4 p-0 text-center">
          <img
            src="media\images\Kailash.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h5 className="mt-3">Dr. Kailash Nadh</h5>
          <h6>CTO</h6>
        </div>
        <div className="col-4 p-0 text-center">
          <img
            src="media\images\Venu.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h5 className="mt-3">Venu Madhav</h5>
          <h6>COO</h6>
        </div>
      </div>

      <div
        className="row px-5 mt-5 mx-5  text-center text-muted"
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        <div className="col-4 p-0 text-center">
          <img
            src="media\images\Hanan.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h5 className="mt-3">Hanan Delvi</h5>
          <h6>CCO</h6>
        </div>
        <div className="col-4 p-0 text-center">
          <img
            src="media\images\Seema.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h5 className="mt-3">Seema Patil</h5>
          <h6>Director</h6>
        </div>
        <div className="col-4 p-0 text-center">
          <img
            src="media\images\karthik.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h5 className="mt-3">Karthik Rangappa</h5>
          <h6>Chief of Education</h6>
        </div>
      </div>

      <div
        className="row px-5 m-5 pb-5  text-center text-muted"
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        <div className="col-4 p-0 text-center">
          <img
            src="media\images\Austin.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h5 className="mt-3">Austin Prakesh</h5>
          <h6>Director Strategy</h6>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
