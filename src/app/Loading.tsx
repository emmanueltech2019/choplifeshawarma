'use client';
import React, {useState,useEffect} from 'react'

function Loading() {
  const [progress,setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  },[]);
  return (
    <div>
      <div className="loader flex justify-center items-center min-h-[100vh]">
        <div className={"bar bg-[#ECECEC] w-full h-[5px] rounded-full max-w-[300px] shadow-sm relative"}>
          <div className={"progress bg-[#D00000] h-full rounded-full before:top-0 before:absolute before:-translate-x-1/2 before:-translate-y-full before:content-[url('./components/img/loader.png')] before:left-full relative"} style={{width: progress +'%'}}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
