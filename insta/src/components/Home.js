import React, { useState } from "react";

import {BiComment} from 'react-icons/bi'

import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import "./Home.css";
export default function Home() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const handleLikes = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false); 
      setCount(count - 1);
    }
  };
  return (
    <>
   
    <div className="card">
      <div className="card-header">
  <div className="card-pic">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECE9vawCStTJ4L1qit9vKyPAUA753Ed9xxnoQa1Abd6HkUZDn5r01zAlqSR2rxw24LXY&usqp=CAU" alt="img"  />
  <h4>Ramesh</h4>
  </div>
   </div>
    <div className="card-image">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35Sk9mMEcBuooCRGNUylcYn-PR6IZhDHzvA&usqp=CAU" alt="img3" onDoubleClick={handleLikes} />
    
            {/* card content */}
            <div className="card-content">
              {like?<AiFillHeart size={29} className="text-danger"  onClick={handleLikes} style={{ cursor: "pointer" }}/>:< AiOutlineHeart size={29}  onClick={handleLikes} style={{ cursor: "pointer" }}/>}
              
                  <h4>Like Counts: {count}</h4>
                  <p>This is amazimg</p>
                  </div>
  </div>

  
  <div className="add-comment">
  <span className="material-symbols-outlined"><BiComment size={24}/></span>
  <input type="text" placeholder='Add a comment'></input>
  <button className="comment">Post</button>
  </div>
  <br></br>
  <br></br>
  <div className="card-header">
  <div className="card-pic">
  <img src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg" alt="img"  />
  <h4>Ramesh</h4>
  </div>
   </div>
    <div className="card-image">
    <img src="https://www.milkmaid.in/sites/default/files/2022-03/Strawberry-IceCream-590x436.jpg" alt="img3" onDoubleClick={handleLikes} />
    
            {/* card content */}
            <div className="card-content">
              {like?<AiFillHeart size={29} className="text-danger"  onClick={handleLikes} style={{ cursor: "pointer" }}/>:< AiOutlineHeart size={29}  onClick={handleLikes} style={{ cursor: "pointer" }}/>}
              
                  <h4>Like Counts: {count}</h4>
                  <p>This is amazimg</p>
                  </div>
  </div>
  <div className="add-comment">
  <span className="material-symbols-outlined"><BiComment size={24}/></span>
  <input type="text" placeholder='Add a comment'></input>
  <button className="comment">Post</button>
  </div>
  <div className="card-header">
  <div className="card-pic">
  <img src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg" alt="img"  />
  <h4>Ramesh</h4>
  </div>
   </div>
    <div className="card-image">
    <img src="data:image/jpeg;base64,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
    " alt="img3" onDoubleClick={handleLikes} />
    
            {/* card content */}
            <div className="card-content">
              {like?<AiFillHeart size={29} className="text-danger"  onClick={handleLikes} style={{ cursor: "pointer" }}/>:< AiOutlineHeart size={29}  onClick={handleLikes} style={{ cursor: "pointer" }}/>}
              
                  <h4>Like Counts: {count}</h4>
                  <p>This is amazimg</p>
                  </div>
  </div>
  <div className="add-comment">
  <span className="material-symbols-outlined"><BiComment size={24}/></span>
  <input type="text" placeholder='Add a comment'></input>
  <button className="comment">Post</button>
  </div>
  </div>
  </>
  )
}
