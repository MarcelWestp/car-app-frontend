import React,{useState} from "react";
import "./searchbar.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Filtermodal from './../filtermodal/filtermodal'

const Searchbar = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div id="searchbar">
      <div className="destination">
        <p>Where</p>
        <input type="text" placeholder="City..." />
      </div>
      <div className="from">
        <p>From</p>
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      </div>
      <div className="until">
        <p>Until</p>
        <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      </div>
      <div className="filter">
          <button type="button">
                <Filtermodal open={open} handleOpen={handleOpen}/>
          </button>
      </div>
      <div className="submit-div">
        <Link to="/search">
            <button type="button">Search..</button>
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
