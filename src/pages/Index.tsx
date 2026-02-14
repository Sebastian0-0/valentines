import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import Envelope from "@/components/Envelope";
import ValentineLetter from "@/components/ValentineLetter";

const Index = () => {
  const [stage, setStage] = useState<"envelope" | "opening" | "letter" | "flipped">("envelope");

  const handleOpenEnvelope = () => {
    setStage("opening");
    setTimeout(() => setStage("letter"), 1200);
  };

  const handleAccepted = () => {
    setStage("flipped");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4">
      <FloatingHearts />

      <div className="relative z-10 w-full">
        {/* Envelope stage */}
        {(stage === "envelope" || stage === "opening") && (
          <Envelope onOpen={handleOpenEnvelope} isOpening={stage === "opening"} />
        )}

        {/* Letter stage */}
        {(stage === "letter" || stage === "flipped") && (
          <div className="letter-rise">
            <ValentineLetter
              onAccepted={handleAccepted}
              isFlipped={stage === "flipped"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
