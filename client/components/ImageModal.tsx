import React from 'react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="modal fixed w-[100vw] h-[100vh] mx-auto bg-slate-800/75">
      <div className="modal-content flex align-center justify-center">
        <img src={imageUrl} alt="Image" className='w-[80%] p-8 max-w-[500px] max-h-[500px]'/>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
