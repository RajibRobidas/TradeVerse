import React from "react";
import "./SupportPage.css";

function CreateTicket() {
  return (
    <>
      <div className="cointainer text-muted mx-5 px-5">
        <div className="row mx-5 p-5">
          <h3 className="fs-4 mb-5">
            To create a ticket, select a relevant topic
          </h3>
          <div className="col-4">
            <a href="/" className="fs-5 mb-5 text-muted linka">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Account
              Opening
            </a>
            <div className="px-4 mt-3 links">
              <a href="">Resident individual</a> <br />
              <a href="">Minor</a> <br />
              <a href="">Non Resident Indian (NRI)</a> <br />
              <a href="">Company, Partnership, HUF and LLP</a> <br />
              <a href="">Glossary</a> <br />
            </div>
          </div>

          <div className="col-4">
            <a href="/" className="fs-5 mb-5 text-muted linka">
              <i class="fa-solid fa-user"></i> Your Zerodha
              Account
            </a>
            <div className="px-4 mt-3 links">
              <a href="">Your Profile</a> <br />
              <a href="">Minor</a> <br />
              <a href="">Account modification</a> <br />
              <a href="">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
              <br />
              <a href="">Nomination</a> <br />
              <a href="">Transfer and conversion of securities</a> <br />
            </div>
          </div>

          <div className="col-4">
            <a href="/" className="fs-5 mb-5 text-muted linka">
              <i class="fa-solid fa-chart-simple"></i> Kite
            </a>
            <div className="px-4 mt-3 links">
              <a href="">IPO</a> <br />
              <a href="">Trading FAQs</a> <br />
              <a href="">Margin Trading Facility (MTF) and Margins</a> <br />
              <a href="">Charts and orders</a> <br />
              <a href="">Alerts and Nudges</a> <br />
              <a href="">General</a> <br />
            </div>
          </div>

          <div className="col-4 mt-5">
            <a href="/" className="fs-5 mb-5 text-muted linka">
              <i class="fa-solid fa-inbox" aria-hidden="true"></i> Account
              Opening
            </a>
            <div className="px-4 mt-3 links">
              <a href="">Resident individual</a> <br />
              <a href="">Minor</a> <br />
              <a href="">Non Resident Indian (NRI)</a> <br />
              <a href="">Company, Partnership, HUF and LLP</a> <br />
              <a href="">Glossary</a> <br />
            </div>
          </div>

          <div className="col-4 mt-5">
            <a href="/" className="fs-5 mb-5 text-muted linka">
              <i class="fa-solid fa-bullseye" aria-hidden="true"></i> Your Zerodha
              Account
            </a>
            <div className="px-4 mt-3 links">
              <a href="">Your Profile</a> <br />
              <a href="">Minor</a> <br />
              <a href="">Account modification</a> <br />
              <a href="">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
              <br />
              <a href="">Nomination</a> <br />
              <a href="">Transfer and conversion of securities</a> <br />
            </div>
          </div>

          <div className="col-4 mt-5">
            <a href="/" className="fs-5 mb-5 text-muted linka">
              <i class="fa-solid fa-circle" aria-hidden="true"></i> Kite
            </a>
            <div className="px-4 mt-3 links">
              <a href="">IPO</a> <br />
              <a href="">Trading FAQs</a> <br />
              <a href="">Margin Trading Facility (MTF) and Margins</a> <br />
              <a href="">Charts and orders</a> <br />
              <a href="">Alerts and Nudges</a> <br />
              <a href="">General</a> <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
