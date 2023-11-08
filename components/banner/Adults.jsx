import styles from "./Adults.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { icons } from "react-icons";
import { AiOutlineMinusSquare,AiOutlinePlusSquare,AiOutlineDown } from "react-icons/ai";

const Adults = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [drop_visible, setDropVisible] = useState(false);
  const inputRef = useRef(null);

  const on_button_click = () => {
    setDropVisible(!drop_visible);
  };

  const handleClickOutside = (event) => {
    console.log(event.target.className);

    //ivda aan problem ulllath!!!!!
    if (event.target.className) {
      setDropVisible(setDropVisible(!drop_visible));
    }
  };
  // Ivdam vare
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

   
  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDivPosition({ top: rect.top+offset, left: rect.left });
    }
  }, []);
  
  const [absoluteWidth, setDivWidth] = useState(null);
   const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
  const offset = 60;
  
 
   const handleResize = () => {
     if (inputRef.current) {
       const rect = inputRef.current.getBoundingClientRect();
       setDivPosition({ top: rect.top+offset, left: rect.left });
     }
     if (inputRef.current) {
       setDivWidth(inputRef.current.offsetWidth);
     }
   };
   useEffect(() => {
     handleResize(); // Initial call to set the div position
     window.addEventListener('resize', handleResize);
 
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

  return (
    <div className={styles.mainbody} ref={inputRef}>
      <p>{adults}:Adults</p><hr />
      <p>{children}:Children</p><hr />
      <p>{rooms}:Rooms</p><hr />
      <div className={styles.buttonbody}>
        <AiOutlineDown
          className={styles.button}
          onClick={() => {
            on_button_click();
          }}
        />
      </div>
      <div className={styles.main} style={{ position: 'absolute', top: divPosition.top, left: divPosition.left ,width:absoluteWidth}} >
        {drop_visible && (
          <div className={styles.dropdown}>
            <div className={styles.dropsection}>
              <AiOutlineMinusSquare className={styles.buttondrop} />
              <p>Adults</p>
              <AiOutlinePlusSquare className={styles.buttondrop}/>
            </div>
              <hr />
            <div className={styles.dropsection}>
              <AiOutlineMinusSquare className={styles.buttondrop}/>
              <p>Children</p>
              <AiOutlinePlusSquare className={styles.buttondrop}/>
            </div>
              <hr />
            <div className={styles.dropsection}>
              <AiOutlineMinusSquare className={styles.buttondrop}/>
              <p>Rooms</p>
              <AiOutlinePlusSquare className={styles.buttondrop}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adults;
