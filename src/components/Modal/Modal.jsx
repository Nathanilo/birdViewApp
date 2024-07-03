/* eslint-disable no-unused-vars */

import { Close } from "../../assets";
import { ModalProfileIcon } from "../../assets";

// eslint-disable-next-line react/prop-types
function Modal({ title, children, closeModal, className }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[#34405499] ">
      <div
        className={`${className} bg-white rounded-lg p-4 z-50 w-[80%] md:w-[45%] xl:w-[35%] items-center px-8 pt-8 pb-14 `}
      >
        <div className="flex relative items-center justify-center">
          <div className="flex flex-col justify-center items-center ">
            <img
              src={ModalProfileIcon}
              alt="profile"
              className="border border-primary-200 rounded-[50%] p-4 bg-primary-50"
            />
            <h2 className="text-2xl font-bold text-center mt-4">{title}</h2>
          </div>
          <button className="close absolute right-0 top-0" onClick={closeModal}>
            <img src={Close} alt="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
