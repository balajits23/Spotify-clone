import React from "react";
import Logo from "../Pages/HeaderComponent/Logo";

const UserLeftBlock = () => {
  return (
    <div className="userLeftBlock">
      <Logo />
      <div className="userli">
        <ul>
          <li>
            <a href="">
              <i class="fal fa-home-alt"></i>Home
            </a>
          </li>
          <li className="search">
            <a href="">
              <i class="fal fa-search"></i>Search
            </a>
          </li>
          <li className="library">
            <a href="">
              <i class="fal fa-books"></i>Your Library
            </a>
          </li>
        </ul>
      </div>
      <div className="playList">
        <ul>
          <li>
            <a href="" className="createPlaylist">
              <i class="fal fa-plus-square" style={{ color: "grey" }}></i>
              Create Playlist
            </a>
          </li>
          <li>
            <a href="" className="likedSongs">
              <i class="fad fa-heart-square" style={{ color: "purple" }}></i>
              Liked Songs
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p
          style={{
            borderBottom: "1px solid grey",
            width: "75%",
            marginLeft: "20px",
          }}
        ></p>
      </div>
      <div className="installApp">
        <i class="fal fa-arrow-circle-down"></i>
        <span>
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            Install App
          </a>
        </span>
      </div>
    </div>
  );
};

export default UserLeftBlock;
