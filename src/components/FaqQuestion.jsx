import { gsap } from 'gsap';
import { useRef } from 'react';

export default function FaqQuestion({ question, answer }) {
  const move = useRef();

  function handleClick() {
    gsap.to('.answer', {
      height: '0px',
      duration: 0.3,
    });
    gsap.to(move.current, {
      height: 'auto',
      duration: 0.3,
      overwrite: true,
    });
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer select-none border-t p-4"
    >
      <div className="flex items-center justify-between font-semibold">
        <p>{question}</p>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div ref={move} className="answer | h-0 overflow-hidden">
        <div className="h-4"></div>
        <p className="text-zinc-700">{answer}</p>
      </div>
    </div>
  );
}
