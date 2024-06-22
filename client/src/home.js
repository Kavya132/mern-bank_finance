import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <style>{`
        .container {
         height:100vh;
          text-align: center;
          padding: 20px;
          border: 2px solid #000; /* Change border properties as needed */
          border-radius: 10px;
          background: lavender;
          color: white;
        }

        #box{
          margin-top:300px;
          margin-left:100px;
          
          border:5px double black;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          margin: 20px 0;
          color:black;
        }

        .links {
          margin-top: 50px;
        }

        .link {
          color: blue;
          text-decoration: none;
          margin-right: 20px;
          font-size: 18px;
          position: relative;
          overflow: hidden;
          transition: 0.5s;
        }

        .link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: blue;
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out 0s;
        }

        .link:hover::before {
          visibility: visible;
          transform: scaleX(1);
        }

        .link:hover {
          color: navy;
          transform: translateY(-5px);
        }

        .link:active {
          transform: translateY(0);
        }

        .link:nth-child(1) {
          animation: slideInLeft 0.5s forwards;
        }

        .link:nth-child(2) {
          animation: slideInRight 0.5s forwards;
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50%);
          }
          100% {
            opacity: 1;
            transform: translateX(0%);
          }
        }

        span{
          color:#32cd32;
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50%);
          }
          100% {
            opacity: 1;
            transform: translateX(0%);
          }
        }
      `}</style>
      <div className="container">
        <div id="box">
        <h1 className="title">WELCOME TO BANKING AND FINANCE MANAGEMENT SYSTEM</h1>
        <div className="links">
          
          <Link className="link" to='/login'>LOGIN</Link>
          <br />
          <br />
          <Link className="link" to='/register'>REGISTER</Link>
          <br></br>
          <span>.</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
