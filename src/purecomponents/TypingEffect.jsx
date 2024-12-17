import { useState, useEffect } from 'react';

const TypingEffect = ({ text, typingSpeed, eraseSpeed, pauseDuration }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let interval;

    const startTyping = () => {
      let index = 0;
      interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            startErasing();
          }, pauseDuration);
        }
      }, typingSpeed);
    };

    const startErasing = () => {
      let index = text.length;
      interval = setInterval(() => {
        if (index >= 0) {
          setDisplayText(text.substring(0, index));
          index--;
        } else {
          clearInterval(interval);
          startTyping();
        }
      }, eraseSpeed);
    };

    startTyping();

    return () => clearInterval(interval);
  }, [text, typingSpeed, eraseSpeed, pauseDuration]);

  return (
      <h3 className="max-w-max bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text font-bold font-rubik text-2xl sm:text-4xl"> {displayText?displayText:"_"}</h3>
  );
};

export default TypingEffect;