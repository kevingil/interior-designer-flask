import React from 'react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={imageUrl} alt="Image" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
