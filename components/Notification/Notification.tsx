import React, { useEffect } from "react";

interface INotificationProps {
  title: string;
  onClose: () => void;
}

const Notification: React.FC<INotificationProps> = ({ title, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed right-4 top-0 z-50 h-16 w-72">
      <div className="pointer-events-auto min-w-full overflow-hidden rounded-lg bg-quinary shadow-lg ring-1 ring-black ring-opacity-5 ">
        <div className="min-w-full p-4 ">
          <div className="flex items-start">
            <div className="flex-shrink-0"></div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-md font-medium text-white">{title}</p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                onClick={onClose}
                className="inline-flex rounded-md bg-quinary text-white hover:text-primary focus:outline-none"
              >
                <span className="sr-only">Close</span>
                <span className="h-5 w-5">X</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
