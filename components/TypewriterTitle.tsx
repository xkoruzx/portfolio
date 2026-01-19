"use client"; 

import { useEffect } from "react";

export const TypewriterTitle = () => {
  useEffect(() => {
    
    const text = "Suradit | Portfolio"; 
    let i = 0;
    
    document.title = ""; 

    const typingEffect = setInterval(() => {
      document.title = text.substring(0, i + 1) + "|";
      i++;

      if (i >= text.length) {
        clearInterval(typingEffect);
        setTimeout(() => {
          document.title = text;
        }, 500);
      }
    }, 100); 

    return () => clearInterval(typingEffect);
  }, []);

  return null;
};