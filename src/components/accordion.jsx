import { React, Fragment, useState, useEffect, useRef} from "react";
import Vector from "../assets/icons/Vector.svg";
import verified from "../assets/icons/verified.svg";
import arrow from "../../src/assets/icons/arrow-down.svg"
import Modal from "../components/Modal/Model";

const Accordion = ({ image, name,index,open,toggle }) => {
  const [showModal, setShowModal] = useState(false)
  const dropdown = useRef();


  const hide = (e) => {
    if (!dropdown.current.contains(e.target)) {
           setShowModal(false)
    }
    document.removeEventListener("mousedown", hide);
  };

  const show = () => {
    setShowModal(!showModal)
    document.addEventListener("mousedown", hide);
  }

  useEffect(() => {
    document.removeEventListener("mousedown", hide);
  });


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
      <div className="bank-accordion" onClick={() => toggle(index)} style={{ cursor: "pointer" }}>
        <div className="bank-detail" >
          <img src={image} alt="icon"  style={{ height: "30px", width: "30px", objectFit: "cover" , borderRadius: "50%"}}/>
          <p>{name}</p>
        </div>
        { open ? <img src={arrow} alt="arrow-up"/> : <img src={Vector} alt="arrow-open" />}
      </div>
      {
        open && (
          <div className="accordion-body" style={{ padding: "18.5px 25px"}} >
          <h3 style={{ marginBottom: "1.5rem", fontSize: "1rem", color: "#606060"}}>Floof will be able to access your: </h3>
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
          <Modal show={showModal}>
            <h4 ref={dropdown}>Statements</h4>
            <p className="paragraph-1">Send your statements to your favourite apps with Mono. Your information is encrypted using bank grade security.</p>
            <p className="paragraph-2">Mono will never make your login credentials available to Partners.</p>
          </Modal>
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
                cursor: "pointer",
              }}
              onClick={show}
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
