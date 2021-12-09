import React from "react";
import "./SliderComponent.css";

const Slider = () => {
  return (
    <section id="slider-Block">
      <article>
        <div className="sliderLeft">
          <h4>SPOTIFY PREMIUM</h4>
          <h1>Get 3 months of Premium for free</h1>
          <p className="enjoy">
            Enjoy ad-free music listening, offline playback, and more. Cancel
            anytime.
          </p>
          <button>GET 3 MONTHS FREE</button>
          <p className="copyRight">
            Individual plan only. ₹119/month after. Terms and conditions apply.
            Open only to users who haven't already tried Premium. Offer ends 31
            December 2021.
          </p>
        </div>
        <div className="sliderRight">
          <figure>
            <img src="sliderImg.png" alt="sliderImg"/>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default Slider;
