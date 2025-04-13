const Loading = () => {
  return (
    <div className="grid min-h-screen place-content-center bg-white">
      <div className="relative size-16">
        {/* Next.js logo-inspired loading spinner */}
        <div className="absolute inset-0 rounded-full border-8 border-neutral-100"></div>
        <div className="absolute inset-0 animate-[spin_1s_linear_infinite] rounded-full border-8 border-t-black border-r-transparent border-b-transparent border-l-transparent"></div>

        {/* Optional: Add a stylized "N" in the center */}
        <div className="absolute inset-0 grid place-content-center">
          <div className="text-xl font-bold text-black">N</div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
