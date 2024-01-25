import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <div className="container-2">
      <div className="head">
        <img src="./images/animal.png" alt="Logo" />
        <p>Code Buddy</p>
      </div>
      <div className="body">
        <div className="languages">
          <p>Languages</p>
          <div className="language">
            <div className="text">
              <p>Learn Java</p>
            </div>
          </div>
          <div className="language">
            <div className="text">
              <p>Learn Rust</p>
            </div>
            <button className="button">
              <span className="span">🔎</span>
            </button>
          </div>
          <div className="language">
            <div className="text">
              <p>Learn JavaScript</p>
            </div>
            <button className="button">
              <span className="span">🔎</span>
            </button>
          </div>
          <div className="language">
            <div className="text">
              <p>Learn Python</p>
            </div>
            <button className="button">
              <span className="span">🔎</span>
            </button>
          </div>
        </div>

        <div className="frameworks">
          <p>Frameworks</p>
          <div className="framework">
            <div className="text">
              <p>Learn React</p>
            </div>
          </div>
          <div className="framework">
            <div className="text">
              <p>Learn Spring</p>
            </div>
          </div>
          <div className="framework">
            <div className="text">
              <p>Learn Node.Js</p>
            </div>
          </div>
          <div className="framework">
            <div className="text">
              <p>Learn Express.Js</p>
            </div>
          </div>
          <div className="framework">
            <div className="text">
              <p>Learn Spring Ai</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="footer">
        <div className="user-profile">
            <img src="./images/user.jpeg" alt="User Profile Image"></img>
            <div className="user-name">Alexzander de Gabriyo</div>
        </div>
    </div>

    </div>
  );
};

export default Explore;
