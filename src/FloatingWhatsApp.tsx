import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function FloatingWhatsApp() {
  const [tooltip, setTooltip] = useState(true);

  const phoneNumber = '919440123456';
  const message = encodeURIComponent("Hello Siri Aquatic, I'm interested in your aquaculture equipment and aeration solutions. Please share details.");
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="floating-whatsapp-cluster" aria-label="Quick contact on WhatsApp">
      {tooltip && (
        <div className="whatsapp-tooltip-card">
          <button
            type="button"
            className="tooltip-close-btn"
            onClick={() => setTooltip(false)}
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
          <div className="tooltip-avatar">
            <span className="online-indicator" />
            <MessageCircle size={18} />
          </div>
          <div className="tooltip-text">
            <strong>Chat with Siri Team</strong>
            <small>Online · Immediate reply</small>
          </div>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab-button"
        title="Chat with our engineering team on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="fab-pulse-ring" />
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.906.531 3.703 1.5 5.25L2 22l4.875-1.469a9.98 9.98 0 0 0 5.156 1.5c5.531 0 10.031-4.5 10.031-10.031C22.063 6.5 17.563 2 12.031 2zm0 18.063c-1.688 0-3.25-.469-4.594-1.313l-.328-.188-3.094.938.969-2.969-.219-.344A8.06 8.06 0 0 1 3.969 12.03c0-4.438 3.625-8.063 8.063-8.063 4.438 0 8.063 3.625 8.063 8.063s-3.625 8.031-8.063 8.031zm4.406-6.031c-.25-.125-1.469-.719-1.688-.813-.219-.094-.375-.125-.531.125-.156.25-.625.813-.781.969-.156.188-.313.188-.563.063-.25-.125-1.063-.375-2.031-1.219-.75-.688-1.25-1.531-1.406-1.781-.156-.25-.031-.375.094-.5.125-.125.25-.313.375-.469.125-.156.156-.25.25-.438.094-.188.031-.344-.031-.469-.063-.125-.531-1.281-.719-1.781-.188-.469-.375-.406-.531-.406h-.438c-.156 0-.406.063-.625.313-.219.25-.844.813-.844 2 0 1.188.875 2.344 1 2.5.125.156 1.719 2.625 4.156 3.688.594.25 1.063.406 1.438.531.594.188 1.156.156 1.594.094.469-.063 1.469-.594 1.688-1.188.219-.594.219-1.094.156-1.188-.063-.094-.219-.156-.469-.281z" />
        </svg>
      </a>
    </div>
  );
}
export default FloatingWhatsApp;
