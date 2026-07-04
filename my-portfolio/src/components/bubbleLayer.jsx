import { motion } from "framer-motion";
import { useState } from "react";

export default function BubbleLayer() {
  const [bubbles, setBubbles] = useState(
    Array.from({ length: 10 }, (_, i) => ({ id: i, popped: false }))
  );

  const popBubble = id => {
    setBubbles(prev =>
      prev.map(b => (b.id === id ? { ...b, popped: true } : b))
    );
  };

  return (
    <div className="bubble-layer">
      {bubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          className="bubble"
          initial={{ scale: 1, opacity: 1 }}
          animate={bubble.popped ? { scale: 0, opacity: 0 } : {}}
          transition={{ duration: 0.3 }}
          onClick={() => popBubble(bubble.id)}
        />
      ))}
    </div>
  );
}
