import React from "react";

export const useWindowWidth = () => {
    const isWindowClient = typeof window === "object";
    const [windowWidth, setWindowWidth] = React.useState(
      isWindowClient ? window.innerWidth : undefined
    );
  
    React.useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      if (isWindowClient) {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [isWindowClient, setWindowWidth]);
    return windowWidth;
  }