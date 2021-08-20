import { React, Fragment, useState } from "react";
import Vector from "../assets/icons/Vector.svg";
import verified from "../assets/icons/verified.svg";

const Accordion = ({ image, name,index,open,toggle }) => {
  const items = [
    {
      svg: verified,
      item: "Account holder name",
    },
    {
      svg: verified,
      item: "Account type",
    },
    {
      svg: verified,
      item: "Account transaction history",
    },
    {
      svg: verified,
      item: "Account balance",
    },
  ];




  return (
    <Fragment>
      <div className="bank-accordion" onClick={() => toggle(index)}>
        <div className="bank-detail" >
          <img src={image} alt="icon" />
          <p>{name}</p>
        </div>
        <img src={Vector} alt="arrow-open" />
      </div>
      {
        open && (
          <div className="accordion-body" style={{ padding: "18.5px 25px" }} >
          <h3>Floof will be able to access your: </h3>
          {items.map((item, i) => (
            <div style={{ display: "flex", marginBottom: "10px" }} key={i}>
              <img
                src={item.svg}
                alt="icon"
                style={{ marginRight: "15px", objectFit: "cover" }}
              />
              <p>{item.item}</p>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{
                height: "2.625rem",
                width: "5.625rem",
                borderRadius: "10px",
                background: "#0055BA",
                color: "#fff",
                outline: "none",
                border: "none",
                marginTop: "20px",
              }}
            >
              More Info
            </button>
          </div>
        </div>
        )
      }
     
      <hr />
    </Fragment>
  );
};

export default Accordion;
