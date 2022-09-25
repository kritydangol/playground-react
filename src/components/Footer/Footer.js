import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col-4">
        <h5>
          <b>SoftBread Tech</b>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          ultrices sagittis orci a. Molestie nunc non blandit massa enim nec.
        </p>
        <div>
          <i class="fa fa-facebook fa-footer" aria-hidden="true"></i>
          <i class="fa fa-instagram fa-footer" aria-hidden="true"></i>
          <i class="fa fa-twitter fa-footer" aria-hidden="true"></i>
          <i class="fa fa-youtube-play fa-footer" aria-hidden="true"></i>
          <i class="fa fa-whatsapp fa-footer" aria-hidden="true"></i>
        </div>
      </div>
      <div className="footer-col-3">
        <h5>
          <b>Some Links</b>
        </h5>
        <a href="#!">F.A.Q.</a> <br />
        <a href="#!">Cookies Policy</a> <br />
        <a href="#!">Terms of Service</a> <br />
        <a href="#!">Support</a>
      </div>
      <div className="footer-col-3">
        <h5>
          <b>Some Links</b>
        </h5>
        <a href="#!">F.A.Q.</a> <br />
        <a href="#!">Cookies Policy</a> <br />
        <a href="#!">Terms of Service</a> <br />
        <a href="#!">Support</a>
      </div>
      <div className="footer-col-5">
        <h5>
          <b>Newsletter</b>
        </h5>
        <form>
          <input class="textbar" type="text" placeholder="Your Email ID here" /><br/>
          <input class="button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
