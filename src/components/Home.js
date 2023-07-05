import React from "react";
import "../Home.css";
import img2 from "./images/photo2.jpg";
import Swal from "sweetalert2";

export default function Home(props) {
  const Clicked = () => {
    Swal.fire("Good luck for the future", "Things are still around", "success");
  };

  return (
    <>
      <div
        className="home"
        style={{ backgroundColor: props.mode === "dark" ? "white" : "dark" }}
      >
        <div className="container">
          {/* grid */}
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              {/* row left */}
              <div className="row">
                {/* row left-1 */}
                <div
                  className=" top_div d-flex justify-content-center align-items-center"
                  id="First_elem"
                  style={{ padding: "0px 0px 0px 25px" }}
                >
                  <p style={{ margin: "10px" }}>
                    Find the right
                    <br />
                    online tutor for you.
                  </p>
                </div>
                {/* row left-2 */}
                <div
                  className=" top_div d-flex justify-content-center align-items-center"
                  id="top_center"
                >
                  <p style={{ margin: "10px" , padding:"0px 0px 0px 15px" }}>
                    Your online tutor is here...
                    <br />
                    Grab the opportunity start learning anytime anywhere.
                  </p>
                </div>
                {/* row left-3 */}
                <div className=" top_div d-flex justify-content-center align-items-center">
                  <div
                    className="card card_3 bg-dark"
                    style={{ color: "white" }}
                  >
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <div className="number">
                        <p>
                          More than <br /> <b>200+</b> <br />
                          Experienced Tutor
                        </p>
                      </div>
                      <div className="number">
                        <p>
                          More than <br /> <b>20000+</b> <br />
                          Students Active
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right side grid */}

            <div
              className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center"
              id="second"
              style={{ margin: "10px 0px" }}
            >
              <div className="card_grid">
                <div
                  className="card col-sm-6"
                  style={{
                    width: "20rem",
                    margin: "50px 0px 0px 0px",
                    border: "1px solid black",
                  }}
                >
                  <img src={img2} className="card-img-top" alt="card" />
                  <div className="card-body">
                    <h2 className="card_intro">{props.title_first}</h2>
                    <p
                      className="card-text"
                      style={{ padding: "2px 0px 8px 0px", fontSize: "14px" }}
                    >
                      All courses, whether in the video, audio, screen sharing,
                      or another format, are preserved so that student may
                      retrieve them later.Tutor provide lots of knowledge who
                      are experts in various stream.
                    </p>
                    <button className="btn btn-primary" onClick={Clicked}>
                      click me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
