import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            {/***** SOCIAL MEDIA ICON CONTAINER-colz *****/}
            <div className="colz-icon">
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/instructor_ehizeex/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/Ehiedu_baba">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
