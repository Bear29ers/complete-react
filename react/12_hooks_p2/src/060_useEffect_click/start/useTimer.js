import { useState, useEffect, useLayoutEffect } from "react";

// カスタムフックの関数名はuse〜から始まる。
const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffectは基本的には関数コンポーネントのトップレベルでしか呼ぶことができないが、
  // カスタムフックは例外的に呼ぶことができる。
  useEffect(() => {
    // console.log('timer start');
    let intervalId = null;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      window.clearInterval(intervalId);
      // console.log('end');
    };
  }, [isRunning]);

  useEffect(() => {
    // console.log('updated');

    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);

    return () => {
      // debugger
      // console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const toggle = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return {
    toggle,
    reset,
    isRunning,
    time,
  };
};

export default useTimer;
