import { React, useEffect, useState } from "react";
import Search from "../../assets/icons/search.svg";
import "./description.scss";
import axios from "axios";
import Accordion from "../../components/accordion";
const baseURL = "https://mono-backend-banks.herokuapp.com";

const Description = () => {
  const [banks, setBank] = useState([]);
  const [searchBank, setSearchBank] = useState("")
  const Toggle = i=>{
    const newBanks = [...banks] 
    newBanks.forEach(bank=> bank.open = false );
    newBanks[i].open  =  newBanks[i].open ? false : true
    setBank(newBanks)
  }

  useEffect(() => {
    axios.get(`${baseURL}/banks?search=${searchBank}`).then((response) => {
      //setBank(response.data);
      const anime = response.data.map(lot=> ({...lot,open:false}))
      setBank(anime)
    });
  }, [searchBank]);
  
  // useEffect(() => {
  //   axios.get(`${baseURL}/banks?search=${searchBank}`)
  // },[])

  return (
    <div className="description">
      <div className="access">
        <p>Give Floof access to your financial data</p>
      </div>
      <div className="image-banks">
        <div className="bank-card">
          <div className="title">
            <p>Choose your bank</p>
          </div>
          <div className="search-field-con">
            <img src={Search} alt="search-icon" className="search-icon" />
            <input type="text" id="search" placeholder="Search for your bank" onChange={(e) => setSearchBank(e.target.value)}/>
          </div>
          <div className="bank-list-con">
            {banks.map((bank, index) => (
              <Accordion image={bank.image} name={bank.name} key={index} index={index} open={bank.open} toggle={i=>Toggle(i)}/>
            ))}
              <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
