// import React from 'react';

// const ScrollDown = () => {
//     return (
//         <div className='scroll-down'>
//             <a href='#about' className='mouse__wrapper'>
//                 <span className="home__scroll-name">Scroll Down</span>
//                 <span className="mouse"></span>
//                 <span className="wheel"></span>
//             </a>
//         </div>
//     );
// };

// export default ScrollDown;


import React from 'react';

const ScrollDown = () => {
  return (
    <div className="scroll__down">
      <span className="home__scroll-name">Scroll down</span>
      <span className="mouse">
        <span className="wheel"></span>
      </span>
    </div>
  );
};

export default ScrollDown;
