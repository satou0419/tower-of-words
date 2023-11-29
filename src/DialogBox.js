import React from "react";
import "./DialogBox.css"; // Add your styling here
import "@fontsource/lilita-one";

export default function DialogBox({
  title,
  message,
  imageSrc,
  onClose,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  buttons,
}) {
  return (
    <div className="dialog-overlay">
      <div className="dialog-pane">
        <div className="details">
          <h1>{title}</h1>
          {message && <p className="dialog-message">{message}</p>}
          <img src={imageSrc} className="dialog-icon" alt="Dialog Icon" />
        </div>

        <div className="btns">
          {buttons &&
            buttons.map((button, index) => (
              <button
                key={index}
                className={button.className}
                onClick={button.onClick || onClose}
              >
                {button.label}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
