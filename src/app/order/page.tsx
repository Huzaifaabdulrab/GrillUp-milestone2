'use client'
import { useState } from 'react';
import Confetti from 'react-confetti';

export default function Order() {
const[showConfetti , setShowConfetti]=useState(false);
const handleConfetti=()=>{
    setShowConfetti(true);
    setTimeout(()=>setShowConfetti(false),5000)
}

  return (
    <>
      <div className="order-container">
        <h1 className="order-title">𝕲𝖗𝖎𝖑𝖑𝖀𝖕!</h1>
        <p className="order-description">
          This is a demo,🥳 so no actual orders will be processed yet, 🥰 as
          this was just a project created for demonstration purposes. Stay tuned
          as we prepare for our official launch. Thank you for visiting
          <span className="highlight-text"> GrillUp</span>—hope you enjoyed your visit!😇
        </p>
        <button 
          onClick={handleConfetti} 
          className="order-button"
        >
          Click Me For a Surprise! 🎉
        </button>
      </div>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </>
  );
}
