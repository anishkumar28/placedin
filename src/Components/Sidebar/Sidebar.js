import React from "react";
import placedinIcon from '../../assets/placedin-design.png';
import "./Sidebar.css";
import Dashboard from "../Dashboard/Dashboard";
import Todo from "../Todo/Todo";
import Contact from "../Contact/Contact";
import Metrics from "../Metrics/Metrics";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo_container">
        <img className = "logo" src={placedinIcon} alt="Logo" />
      </div>

      <Dashboard/>

      

      <Todo/>

      <Contact/>

      <Metrics/>

    </div>
  );

  }


export default Sidebar;
