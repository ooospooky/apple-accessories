import React from 'react';

interface AddToCartBtnProps {
  btnText: string;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ btnText }) => {
  return (
    <div>
      <button
        type="button"
        className="inline-block w-full px-2 py-4 rounded-xl cursor-pointer text-center whitespace-no-wrap text-2xl font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white  "
      >
        {btnText}
      </button>
    </div>
  );
};

export default AddToCartBtn;
