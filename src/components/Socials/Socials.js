import React from "react";
import "./Socials.css"
import Facebook from "../../images/Facebook";
// import Instagram from "../../images/icon-instagram.svg";
// import Pinterest from "../../images/icon-pinterest.svg";

export default function Socials() {
  return (
    <main id="socialsMain">
      <div className="socialsContainer">
        <Facebook />
        {/* <Facebook />
        <Instagram />
        <Pinterest /> */}
      </div>
    </main>
  );
}
