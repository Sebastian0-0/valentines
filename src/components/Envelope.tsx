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
      {/* Envelope body */}
      <div className="relative w-72 h-48 sm:w-80 sm:h-52 mx-auto">
        {/* Back */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-valentine-rose to-valentine-deep shadow-2xl" />

        {/* Inner */}
        <div className="absolute inset-[3px] rounded-lg bg-valentine-cream" />

        {/* Bottom flap triangles */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div
            className="absolute bottom-0 left-0 w-0 h-0"
            style={{
              borderLeft: "144px solid hsl(346, 77%, 50%)",
              borderRight: "144px solid transparent",
              borderTop: "100px solid transparent",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-0 h-0"
            style={{
              borderRight: "144px solid hsl(346, 77%, 50%)",
              borderLeft: "144px solid transparent",
              borderTop: "100px solid transparent",
            }}
          />
        </div>

        {/* Top flap */}
        <div
          className={`absolute top-0 left-0 right-0 z-10 ${isOpening ? "envelope-flap-open" : ""}`}
          style={{ transformOrigin: "top center", perspective: "800px" }}
        >
          <div
            className="w-0 h-0 mx-auto"
            style={{
              borderLeft: "144px solid transparent",
              borderRight: "144px solid transparent",
              borderTop: "100px solid hsl(346, 80%, 45%)",
            }}
          />
        </div>

        {/* Heart seal */}
        {!isOpening && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-4xl drop-shadow-lg">
            💌
          </div>
        )}
      </div>

      {/* Tap hint */}
      {!isOpening && (
        <p className="text-center mt-6 text-lg text-valentine-deep font-script tap-hint">
          ✨ Tap to open ✨
        </p>
      )}
    </div>
  );
};

export default Envelope;
