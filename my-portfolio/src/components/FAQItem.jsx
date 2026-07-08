import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="collapsible"
        onClick={() => setOpen(!open)}
      >
        {question}
      </button>

      {open && (
        <div className="content">
          <p>{answer}</p>
        </div>
      )}
    </>
  );
}
