import React, { useState, useEffect, useRef } from "react"
import styles from "./Searchbar.module.css"
import {GrLocation} from "react-icons/gr";
import { useReducedMotion } from "framer-motion";

const Searchbar = () => {

  
  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setDivPosition({ top: rect.top+offset, left: rect.left });
    }
  }, []);
  
  const [absoluteWidth, setDivWidth] = useState(null);
  const searchRef = useRef(null)
  const divRef = useRef(null);
  const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
  const offset = 60;
  
   useEffect(() => {
     if (divRef.current) {
       const absoluteWidth = divRef.current.offsetWidth;
     }
   }, []);
 
   const handleResize = () => {
     if (divRef.current) {
       const rect = divRef.current.getBoundingClientRect();
       setDivPosition({ top: rect.top+offset, left: rect.left });
     }
     if (divRef.current) {
       setDivWidth(divRef.current.offsetWidth);
     }
   };
   useEffect(() => {
     handleResize(); // Initial call to set the div position
     window.addEventListener('resize', handleResize);
 
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)



  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Replace this with your logic to fetch suggestions from an API
    const staticSuggestions = ["Apple", "Banana", "Cherry", "Orange"]
    const filteredSuggestions = staticSuggestions.filter(item =>
      item.toLowerCase().includes(newQuery.toLowerCase())
    )

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    if (filteredSuggestions.length === 0) {
      setShowSuggestions(false);
    }
  }

  const handleSuggestionClick = suggestion => {
    setQuery(suggestion)
    setShowSuggestions(false)
  }

  const handleClickOutside = event => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSuggestions(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.searchbody} ref={searchRef}>
      <input
        type="text"
        className={styles.searchbar}
        placeholder="Where are you going?"
        value={query}
        ref={divRef}
        onChange={handleInputChange}
        onClick={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className={styles.suggestionlist} style={{ position: 'absolute', top: divPosition.top, left: divPosition.left ,width:absoluteWidth}}
        >
          {suggestions.map((suggestion, index) => (
            <li
            key={index}
            className={styles.suggestionitem}
            onClick={() => handleSuggestionClick(suggestion)}
            >
            <GrLocation  className={styles.loc}/><hr />
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Searchbar;
