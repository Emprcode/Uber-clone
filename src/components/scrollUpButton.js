import React from 'react';


export const ScrollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='p-3 d-flex justify-content-center align-items-center gap-2 scrolltop' onClick={scrollToTop}>
         {/* <div className='button-text'>Back to top</div> */}
           
   
        <span className="p-2 mb-2 h3 about-icon text-dark">
            {" "}
            <i className="fa-solid fa-arrow-up"></i>
          </span>
  
    </div>
  );
};

