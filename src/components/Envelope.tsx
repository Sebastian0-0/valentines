interface EnvelopeProps {
  onOpen: () => void;
  isOpening: boolean;
}

const Envelope = ({ onOpen, isOpening }: EnvelopeProps) => {
  return (
    <div
      className={`cursor-pointer select-none ${isOpening ? "" : "envelope-idle"}`}
      onClick={!isOpening ? onOpen : undefined}
    >
      <div className="relative mx-auto" style={{ width: 300, height: 200 }}>
        {/* Envelope body */}
        <div
          className="absolute inset-0 rounded-md overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #f4c2c2 0%, #e8a0a0 100%)",
            boxShadow: "0 10px 40px rgba(180, 60, 80, 0.25), 0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {/* Paper inside - only a tiny peek at the top */}
          <div
            className="absolute left-4 right-4 top-2 rounded-sm"
            style={{ height: "35%", background: "linear-gradient(to bottom, #fffaf5, #fff5ee)" }}
          />

          {/* Bottom left triangle */}
          <div
            className="absolute bottom-0 left-0 w-full h-full"
            style={{
              clipPath: "polygon(0 35%, 50% 65%, 0 100%)",
              background: "linear-gradient(135deg, #d4878f, #c97a82)",
            }}
          />

          {/* Bottom right triangle */}
          <div
            className="absolute bottom-0 left-0 w-full h-full"
            style={{
              clipPath: "polygon(100% 35%, 50% 65%, 100% 100%)",
              background: "linear-gradient(225deg, #d4878f, #c97a82)",
            }}
          />

          {/* Bottom center triangle */}
          <div
            className="absolute bottom-0 left-0 w-full h-full"
            style={{
              clipPath: "polygon(0 100%, 50% 65%, 100% 100%)",
              background: "linear-gradient(to top, #c2727c, #cb7e87)",
            }}
          />
        </div>

        {/* Top flap */}
        <div
          className={`absolute top-0 left-0 right-0 z-10 ${isOpening ? "envelope-flap-open" : ""}`}
          style={{ transformOrigin: "top center", height: "50%" }}
        >
          <div
            className="w-full h-full"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "linear-gradient(180deg, #e0959c 0%, #d68890 50%, #cc7b84 100%)",
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
            }}
          />
        </div>

        {/* Heart seal */}
        {!isOpening && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-4xl drop-shadow-md">
            💌
          </div>
        )}
      </div>

      {/* Tap hint */}
      {!isOpening && (
        <p className="text-center mt-8 text-xl text-valentine-deep font-script tap-hint">
          ✨ Tap to open ✨
        </p>
      )}
    </div>
  );
};

export default Envelope;
