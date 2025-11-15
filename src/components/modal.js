export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4">
      <div
        className="
        bg-white rounded-xl shadow-xl relative border border-gray-200
        w-full max-w-3xl
        h-[85vh] md:h-[80vh]
        overflow-y-auto
        
        animate-fadeIn animate-scaleIn
      "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
        >
          ✖
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-gray-800 px-6 mt-4">
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );
}
