import { useState } from "react";


const Modal = ({ title ,description}) => {
  const [isOpen, setIsOpen] = useState(false);

  //modal open function
  const openModal = () => {
    setIsOpen(true);
  };
  //modal close functio
//   const closeModal = () => {
//     setIsOpen(false);
//   };

  return (
    <div>
      <button onClick={openModal} className="primary-color font-bold">
        Read More...
      </button>

      {/* Forms inclued */}
      {isOpen && (
       <dialog id="my_modal_3" className="" open>
       <div className="modal-box w-full">
         <form method="dialog">
           {/* if there is a button in form, it will close the modal */}
           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
         </form>
         <h3 className="font-bold text-lg primary-color">{title}</h3>
         <p className="py-4">{description}</p>
       </div>
     </dialog>
      )}
    </div>
  );
};

export default Modal;
