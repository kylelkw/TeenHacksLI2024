export default function Calendar() {
    return (
      <div className="w-full bg-content-1 h-full rounded-3xl flex flex-col items-center relative blur-md z-0 select-none">
        <h1 className="text-display text-4xl sm:text-5xl md:text-7xl text-bg font-medium mt-6 sm:mt-10">Janurary 2024</h1>
        <div className="mt-8 sm:mt-14 grid-cols-7 grid gap-1 bg-content-3 border-4 border-bg">
          {Array.from({ length: 5 * 7 }).map((num, i) => {
            return <div key={i} className="w-10 h-10 sm:w-16 md:w-20 sm:h-16 md:h-20 bg-content-1" />
          })}
        </div>
        <div className="-z-10 w-full h-full bg-content-1/75 rounded-3xl absolute left-2 sm:left-4 top-2 sm:top-4" />
        <div className="-z-20 w-full h-full bg-content-1/50 rounded-3xl absolute left-4 sm:left-8 top-4 sm:top-8" />
      </div>
    )
  }
  