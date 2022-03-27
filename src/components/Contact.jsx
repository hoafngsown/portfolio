import React from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

const Contact = () => {
  return (
    <div className="text-white container mx-auto px-8 w-screen h-screen bg-black absolute z-10 mt-[300vh]">
      <div className="flex items-center justify-center pt-10">
        <h1 className='mt-5 text-[46px] font-bold text-center relative before:content-[""] before:absolute before:bg-red-400 before:w-full before:h-1 before:bottom-0 before:left-0'>
          Contact
        </h1>
      </div>
      <div className="max-w-[1100px] mx-auto mt-10 bg-transparent flex justify-between py-4">
        <div className="px-4">
          <span className="font-bold text-lg text-red-400 block mb-4">
            Email
          </span>
          <span className="font-medium text-[18px] block mb-16">
            soonhoang14@gmail.com
          </span>
          <span className="font-bold text-lg text-red-400 block mb-4">
            Phone
          </span>
          <span className="font-medium text-[18px] block mb-16">
            +84775098973
          </span>
          <span className="font-bold text-lg text-red-400 block mb-4">
            Address
          </span>
          <span className="font-medium text-[18px] block mb-16">
            Quảng Xương 9 , Hòa Phong , Hòa Vang , Đà Nẵng.
          </span>
        </div>
        <div className="px-2">
          <div className="w-full p-4 flex items-center justify-between">
            <div className="mx-2 w-[50%-4px]">
              <InputField placeholder="Name" />
            </div>
            <div className="mx-2 w-[50%-4px]">
              <InputField placeholder="Email" />
            </div>
          </div>
          <div className="mt-10 w-full px-8">
            <TextareaField placeholder="Enter message here!" />
          </div>
          <div class="w-full px-8 mt-10">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="block w-full py-3 bg-red-400 text-white text-md font-bold leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-200 ease-in-out"
            >
              Submit 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
