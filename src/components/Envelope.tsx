interface EnvelopeProps {
  onOpen: () => void;
  isOpening: boolean;
}

const Envelope = ({ onOpen, isOpening }: EnvelopeProps) => {
  const W = 320; // envelope width
  const H = 210; // envelope height
  const half = W / 2;

  return (
    <div
      className={`cursor-pointer select-none ${isOpening ? "" : "envelope-idle"}`}
      onClick={!isOpening ? onOpen : undefined}
    >
      <div className="relative mx-auto" style={{ width: W, height: H, perspective: "800px" }}>
        {/* Soft shadow */}
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-[50%] bg-valentine-deep/10 blur-lg"
          style={{ width: W * 0.8, height: 16 }}
        />

        {/* Envelope back */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-valentine-rose to-valentine-deep shadow-xl" />

        {/* Inner paper peeking */}
        <div className="absolute inset-[4px] rounded-lg bg-valentine-cream" />

        {/* Bottom flap overlay */}
        <svg className="absolute inset-0 z-[2]" viewBox={`0 0 ${W} ${H}`} fill="none">
          {/* Left bottom flap */}
          <polygon
            points={`0,${H} ${half},${H * 0.45} 0,${H * 0.35}`}
            fill="hsl(346, 72%, 52%)"
          />
          {/* Right bottom flap */}
          <polygon
            points={`${W},${H} ${half},${H * 0.45} ${W},${H * 0.35}`}
            fill="hsl(346, 68%, 48%)"
          />
          {/* Center seam line */}
          <line
            x1={half} y1={H * 0.45}
            x2={half} y2={H}
            stroke="hsl(346, 80%, 40%)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </svg>

        {/* Top flap */}
        <div
          className={`absolute top-0 left-0 right-0 z-[3] ${isOpening ? "envelope-flap-open" : ""}`}
          style={{ transformOrigin: "top center" }}
        >
          <svg viewBox={`0 0 ${W} ${H * 0.55}`} fill="none" style={{ display: "block" }}>
            <polygon
              points={`0,0 ${W},0 ${half},${H * 0.55}`}
              fill="hsl(346, 75%, 42%)"
            />
            {/* Flap inner shading */}
            <polygon
              points={`4,2 ${W - 4},2 ${half},${H * 0.52}`}
              fill="hsl(346, 70%, 46%)"
            />
          </svg>
        </div>

        {/* Heart emoji seal */}
        {!isOpening && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] text-4xl drop-shadow-lg">
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
