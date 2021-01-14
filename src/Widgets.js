import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linked News</h2>
        <InfoIcon />
      </div>
      {newsArticle("House of Rowjay")}
      {newsArticle("Working with React-Redux")}
      {newsArticle("50 way to stay healthy in the New Year")}
      {newsArticle("The complete family plan for healthy living")}
      {newsArticle("How to avoid burnout this year")}
      {newsArticle("Stay in line with new year resolution")}
    </div>
  );
};

export default Widgets;
