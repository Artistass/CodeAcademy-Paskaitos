import { useRef, useState, useEffect } from "react";

export function useHover () {

  const elementRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {

    function handleMouseOver(e) {
      e.target.style.color = "red";
    }
  
    function handleMouseLeave(e) {
      e.target.style.fontSize = "40px"
    }


    elementRef.current.addEventListener("mouseover", handleMouseOver)
    
    elementRef.current.addEventListener("mouseleave", handleMouseLeave)
  
    return () => {
      elementRef.current.removeEventListener("mouseover", handleMouseOver)

    elementRef.current.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [elementRef.current])
  



  return elementRef;
  
}