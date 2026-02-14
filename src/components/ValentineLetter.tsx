import { useState, useCallback } from "react";
import confetti from "canvas-confetti";

interface ValentineLetterProps {
  onAccepted: () => void;
  isFlipped: boolean;
}

const ValentineLetter = ({ onAccepted, isFlipped }: ValentineLetterProps) => {
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const [noCount, setNoCount] = useState(0);

  const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "You're breaking my heart 💔",
    "Please? 🥺",
    "Don't do this 😢",
    "I'll cry!",
    "NOOO 😭",
  ];

  const moveNoButton = useCallback(() => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 50);
    setNoPos({ x, y });
    setNoCount((c) => c + 1);
  }, []);

  const handleYes = () => {
    // Big confetti celebration!
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#e8375b", "#f5a3b5", "#ff6b8a", "#ffd4dc", "#c0392b"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#e8375b", "#f5a3b5", "#ff6b8a", "#ffd4dc", "#c0392b"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();

    // Heart-shaped confetti
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      shapes: ["circle"],
      colors: ["#e8375b", "#f5a3b5", "#ff6b8a", "#ffd4dc"],
    });

    setTimeout(onAccepted, 1500);
  };

  return (
    <div className="letter-container w-full max-w-md mx-auto">
      <div className={`letter-flipper ${isFlipped ? "flipped" : ""}`}>
        {/* FRONT — The question */}
        <div className="letter-front bg-card rounded-2xl shadow-2xl p-8 sm:p-10 border-2 border-valentine-pink/30">
          <div className="text-center space-y-6">
            <p className="text-5xl">💌</p>
            <h1 className="text-3xl sm:text-4xl font-script text-valentine-deep leading-relaxed">
              Will you be my Valentine?
            </h1>
            <p className="text-valentine-rose font-hand text-xl">
              I've been wanting to ask you this...
            </p>

            <div className="flex flex-col items-center gap-4 pt-4">
              <button
                onClick={handleYes}
                className="pulse-glow px-10 py-3 bg-primary text-primary-foreground rounded-full text-xl font-script
                           hover:scale-110 transition-transform duration-200 shadow-lg"
              >
                Yes 💕
              </button>

              {/* No button — either in-place or floating away */}
              {noPos === null ? (
                <button
                  onMouseEnter={moveNoButton}
                  onTouchStart={moveNoButton}
                  className="px-8 py-2 bg-muted text-muted-foreground rounded-full text-lg font-hand
                             hover:bg-muted/80 transition-colors"
                >
                  No
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* BACK — Personal message */}
        <div className="letter-back bg-card rounded-2xl shadow-2xl p-8 sm:p-10 border-2 border-valentine-pink/30">
          <div className="text-center space-y-5">
            <p className="text-4xl">💖</p>
            <h2 className="text-2xl sm:text-3xl font-script text-valentine-deep">
              You said Yes! 🥰
            </h2>

            {/* Photo placeholder */}
            <div className="w-48 h-48 mx-auto rounded-xl border-4 border-dashed border-valentine-pink/40 bg-valentine-blush flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Our photo together"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-lg sm:text-xl font-hand text-foreground leading-relaxed px-2">
              Every moment with you is my favorite memory. I love you more than words can say.
              Happy Valentine's Day, my love! 💕
            </p>

            <p className="text-valentine-rose font-script text-lg">
              — With all my love ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Floating "No" button */}
      {noPos !== null && (
        <button
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          className="fixed z-50 px-6 py-2 bg-muted text-muted-foreground rounded-full text-lg font-hand
                     shadow-lg transition-all duration-300 hover:bg-muted/80"
          style={{ left: noPos.x, top: noPos.y }}
        >
          {noMessages[Math.min(noCount - 1, noMessages.length - 1)]}
        </button>
      )}
    </div>
  );
};

export default ValentineLetter;
