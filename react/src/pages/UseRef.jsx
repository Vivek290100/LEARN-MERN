import { useRef } from "react";

const MyButton = () => {
    const buttonRef = useRef(null);
  
    const handleClick = () => {
      if (buttonRef.current) {
        buttonRef.current.style.backgroundColor = 'blue';
      }
    };
  
    return (
      <>
        <button ref={buttonRef}>Click me</button>
        <button onClick={handleClick}>Change Color</button>
      </>
    );
  }; 

  export default MyButton;
  