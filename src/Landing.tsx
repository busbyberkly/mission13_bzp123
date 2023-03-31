import React from 'react';

function TopBanner() {
  return (
    <>
      <div>
        <div className="col-md-6 mx-auto">
          <h1>Joel Hilton's Film Collection</h1>;
          <p>This Site hosts Joel Hilton's Collection of Films. Enjoy!</p>
        </div>
        <div className="col-md-6 mx-auto">
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="Professor Hilton's brother"
          />
        </div>
      </div>
    </>
  );
}

export default TopBanner;
