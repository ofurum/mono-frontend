import { React, useEffect, useState } from "react";
import powerBy from '../../assets/icons/poweredBy.svg'
import Search from "../../assets/icons/search.svg";
import "./description.scss";
import axios from "axios";
import Accordion from "../../components/accordion";
const baseURL = "https://mono-backend-banks.herokuapp.com";

const Description = () => {
  const [banks, setBank] = useState([]);
  const [searchBank, setSearchBank] = useState("")
  const [isLoading, setLoading] =useState(true);

  const Toggle = i =>{
    let newBanks = [...banks] 
    newBanks[i].open  =  !newBanks[i].open 
    newBanks[i].close = !newBanks[i].close
    newBanks = newBanks.map((bank, index) => {
      if(index !== i) bank.open = false;
      return bank;
    })
    setBank(newBanks)
  }

  useEffect(() => {
    axios.get(`${baseURL}/banks?search=${searchBank}`).then((response) => {
      console.log(response, 'resp')
      const result = response.data.map(lot=> ({...lot,open:false}))
      setLoading(result)
      setBank(result)
      if(!searchBank) console.log("bank not found")
    })
  }, [searchBank]);
  

  if(isLoading) {
    <p>Loading ....</p>
  }

  return (
    <div className="des">
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
      <img src={powerBy} alt="icon" className="img-power"/>
    </div>
    </div>
  );
};

export default Description;
