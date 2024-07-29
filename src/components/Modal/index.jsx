import { FaRegCircleXmark } from 'react-icons/fa6';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, children, onClose }) => {
  window.onclick = (e) => {
    if (e.target == document.getElementById('modal-content')) {
      onClose();
    }
  };

  return isOpen
    ? createPortal(
        <div
          id="modal-root"
          className="bg-black fixed top-0 z-50 bg-opacity-50 w-full h-[calc(100%)]"
        >
          <div id="modal-content" className="flex h-screen">
            <div className="bg-white relative border-2 border-black rounded-lg shadow-2xl shadow-black/80 z-50 w-2/5 h-4/5 overflow-auto m-auto">
              <div className="sticky top-0 right-0 w-full h-0 text-right p-3">
                <button className="hover:text-lime-600 " onClick={onClose}>
                  <FaRegCircleXmark className="w-6 h-6" />
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>,
        document.getElementById('modal')
      )
    : null;
};

export { Modal };
