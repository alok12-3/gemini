import React, { useContext } from 'react';
import '../../assets/assets';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSent(input);
    }
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_item} alt="User Item" />
      </div>
      <div className="main-container">

         {!showResult ? 
         <>

        <div className="greet">
          <p><span>Hello, Dev</span></p>
          <p>How can I help you today</p>
        </div>

        <div className='cards'>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: Urban planning</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>
        </div>
        </> : 
        
        <div className="result">
         <div className='result-title'>
            <img className='avatar' src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
         </div>
         <div className='result-data'>
            <img className='avatar' src={assets.gemini_icon} alt="" />

            {loading ?
            <div className='loader'>
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
         }
            </div>
 
        </div>
        
        }

        <div className="main-bottom">
          <div className='search-box'>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter a prompt here'
             
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              <img onClick={() => onSent(input)} src={assets.send_icon} alt="Send Icon" />
            </div>
          </div>
          <p className='info'>Gemini may display inaccurate info</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
