import React from "react";
import profile_links from "./links";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="container">
          <h4>Hi 👋, I'm Tarun. Know more about me ...</h4>
          {profile_links.map((m, index) => (
            <a
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="item">
                <img className="item-img" src={m.img} alt="icon" />
                {m.name}
                <i className="fas fa-external-link-alt"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
      <footer>
        <div style={{ display: "none" }}>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;
