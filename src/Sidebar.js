import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1582573732277-c5444fa37391?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmJvdyUyMGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Rowland Adimoha</h2>
        <h4>rowland.adimoha@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNavbar">2,345</p>
        </div>
        <div className="sidebar__stat">
          {" "}
          <p>Who viewed you</p>
          <p className="sidebar__statNavbar">3,464</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
