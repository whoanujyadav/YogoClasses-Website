import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="information-div">
      <div className="Home__left">
        <img
          className="yoga-img"
          alt="Yoga"
          src="/images/YogaBanner1.jpg"
        ></img>
      </div>

      <div className="Home__right">
        <h2>Benefits of YOGA</h2>

        <ol className="alternating-colors">
          <li className="li-item">
            <h6>
              Improves flexibility and posture. Improves mood and promotes
              overall well-being.{" "}
            </h6>
          </li>
          <li className="li-item">
            <h6>
              Strengthens muscles and increases muscle tone. Enhances balance
              and stability.
            </h6>
          </li>
          <li className="li-item">
            <h6>
              Enhances balance and stability, Improves mood and promotes overall
              well-being.
            </h6>
          </li>
          <li className="li-item">
            <h6>
              Improves mood and promotes overall well-being, Improves mood and
              promotes overall well-being.
            </h6>
          </li>
          <li className="li-item">
            <h6>
              Improves mood and promotes overall well-being, Improves mood and
              promotes overall well-being.
            </h6>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;