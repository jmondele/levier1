const Marquee = () => {
  const text = "New !! Snackers !!! ";
  const repeatedText = Array(5).fill(text).join("");

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden border-y border-border">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex">
          <span className="font-serif text-sm font-medium tracking-wide px-4">
            {repeatedText}
          </span>
          <span className="font-serif text-sm font-medium tracking-wide px-4">
            {repeatedText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
