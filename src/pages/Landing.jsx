import React from 'react';
import { Link } from 'react-router-dom'; 
import style from "../styleCSS/Landing.module.css"; 

const Landing = () => {
  return (
    <div>
      <div className={style["landing-content"]}>
        <h1>Welcome to My Landing Page</h1>
        <Link to="/homepage" className={style["button"]}>
          Move Next
        </Link>
      </div>
    </div>
  );
};

export default Landing;
