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
      <div className="relative w-80 h-56 sm:w-96 sm:h-64 mx-auto" style={{ perspective: "800px" }}>
        {/* Shadow underneath */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-6 rounded-[50%] bg-valentine-deep/15 blur-md" />

        {/* Back panel with gradient */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-valentine-rose via-valentine-pink to-valentine-deep shadow-[0_8px_32px_rgba(232,55,91,0.3)]" />

        {/* Inner paper */}
        <div className="absolute inset-[4px] rounded-xl bg-gradient-to-b from-valentine-cream to-white" />

        {/* Decorative border pattern */}
        <div className="absolute inset-[8px] rounded-lg border border-valentine-pink/20" />

        {/* Bottom flap - left */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div
            className="absolute bottom-0 left-0 w-0 h-0"
            style={{
              borderLeft: "192px solid hsl(346, 77%, 48%)",
              borderRight: "192px solid transparent",
              borderTop: "120px solid transparent",
              filter: "drop-shadow(0 -2px 4px rgba(0,0,0,0.1))",
            }}
          />
          {/* Bottom flap - right */}
          <div
            className="absolute bottom-0 right-0 w-0 h-0"
            style={{
              borderRight: "192px solid hsl(346, 70%, 55%)",
              borderLeft: "192px solid transparent",
              borderTop: "120px solid transparent",
              filter: "drop-shadow(0 -2px 4px rgba(0,0,0,0.1))",
            }}
          />
          {/* Bottom center fold line */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              borderBottom: "90px solid hsl(346, 80%, 42%)",
              opacity: 0.3,
            }}
          />
        </div>

        {/* Top flap with depth */}
        <div
          className={`absolute top-0 left-0 right-0 z-10 ${isOpening ? "envelope-flap-open" : ""}`}
          style={{ transformOrigin: "top center" }}
        >
          <div
            className="w-0 h-0 mx-auto"
            style={{
              borderLeft: "192px solid transparent",
              borderRight: "192px solid transparent",
              borderTop: "120px solid hsl(346, 75%, 42%)",
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))",
            }}
          />
          {/* Flap inner highlight */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "180px solid transparent",
              borderRight: "180px solid transparent",
              borderTop: "112px solid hsl(346, 70%, 46%)",
            }}
          />
        </div>

        {/* Heart wax seal */}
        {!isOpening && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-5xl drop-shadow-lg">
            💌
          </div>
        )}

        {/* Decorative corner flourishes */}
        <div className="absolute top-3 left-3 text-valentine-pink/30 text-xs font-script">✿</div>
        <div className="absolute top-3 right-3 text-valentine-pink/30 text-xs font-script">✿</div>
        <div className="absolute bottom-3 left-3 text-valentine-pink/30 text-xs font-script z-20">✿</div>
        <div className="absolute bottom-3 right-3 text-valentine-pink/30 text-xs font-script z-20">✿</div>
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
