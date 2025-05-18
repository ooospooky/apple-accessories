import React from 'react';

interface QuantityFieldProps {
  count: number;
  id: string;
  color: string;
  handleProductCountChange: (
    event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>,
    id: string,
    color: string,
  ) => void;
}

const QuantityField: React.FC<QuantityFieldProps> = ({
  count,
  id,
  color,
  handleProductCountChange,
}) => {
  return (
    <div>
      {count < 10 ? (
        <select
          className=""
          id="dropdown"
          value={count}
          onChange={(event) => handleProductCountChange(event, id, color)}
        >
          {[...Array(10)].map((_, index) => (
            <option value={index + 1}>{index + 1 === 10 ? `${index + 1}+` : index + 1}</option>
          ))}
        </select>
      ) : (
        <div className="w-32 px-6 py-3 rounded-2xl border border-[#86868b] flex flex-col">
          <span className="text-base text-[#86868b]">數量</span>
          <input
            className="w-full text-[#1d1d1f] text-3xl font-normal [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            id="quantityInput"
            type="number"
            min={1}
            defaultValue={count}
            onBlur={(event) => handleProductCountChange(event, id, color)}
          />
        </div>
      )}
    </div>
  );
};

export default QuantityField;
