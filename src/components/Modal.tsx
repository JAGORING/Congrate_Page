interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  hideCloseButton?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Modal({ isOpen, onClose, title, children, footer, hideCloseButton = false, size = "md" }: ModalProps) {
  if (!isOpen) return null;

  const sizeClass = size === "sm" ? "w-72" : size === "lg" ? "w-[28rem]" : "w-80";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-xl p-6 ${sizeClass} max-w-90vw relative`}>
        {(title || !hideCloseButton) && (
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-center flex-1">{title}</h3>
            {!hideCloseButton && (
              <button aria-label="close" onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                ✕
              </button>
            )}
          </div>
        )}
        <div>
          {children}
        </div>
        {footer && (
          <div className="mt-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

