export default function CardPhone({ title, content }) {
  return (
    <div className="h-fit select-none gap-4 rounded-2xl bg-zinc-200 p-4 lg:p-6">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-zinc-300 p-4">
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
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>
        </div>

        <h4 className="text-3xl font-bold">{title}</h4>
      </div>
      <div className="">
        {<div className="h-4"></div>}
        <p className="text-zinc-700">{content}</p>
      </div>
    </div>
  );
}
