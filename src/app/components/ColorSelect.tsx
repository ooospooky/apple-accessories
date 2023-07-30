import React, { useState, useEffect } from 'react'

interface ColorsSelectProps {
  colorsType: string[];
  colors: null | string[];
  selectedColor: string | null; // 添加 selectedColor 屬性
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>; // 添加 setSelectedColor 屬性
}

export const ColorSelect: React.FC<ColorsSelectProps> = ({ colorsType, colors, selectedColor, setSelectedColor }) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };
  useEffect(() => {
    if (selectedColor === null) {
      setSelectedColor(colorsType[0]);
    }
  }, [selectedColor, colorsType]);

  return (
    <div>
      <h2 className="text-3xl font-semibold">顏色 - {selectedColor}</h2>
      <ul className='flex flex-row gap-6 my-4'>
        {colors?.map((color, index) => {
          return (
            <li key={index}>
              <label className="flex items-center cursor-pointer">
                <input
                  checked={selectedColor === colorsType[index]}
                  type="radio"
                  name="color"
                  value={colorsType[index]}
                  className={`hidden peer/color`}
                  onChange={handleColorChange}
                />
                <div
                  className={`w-16 h-16 rounded-full bg-${color} peer-checked/color:ring peer-checked/color:ring-blue-500 peer-checked/color:ring-offset-4`}
                ></div>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

{/* <h2 className="">顏色 - 墨水色</h2>
      <ul className='flex flex-row gap-6 my-4'>
        <li>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="pink"
              className="hidden peer/darkred"
            />
            <div
              className="w-16 h-16 rounded-full bg-pink-800 peer-checked/darkred:ring peer-checked/darkred:ring-blue-500 peer-checked/darkred:ring-offset-4"
            ></div>
          </label>

        </li>
        <li>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="blue"
              className="hidden peer/blue"
            />
            <div
              className="w-16 h-16 rounded-full bg-blue-500 peer-checked/blue:ring peer-checked/blue:ring-blue-500 peer-checked/blue:ring-offset-4"
            ></div>
          </label>
        </li>
        <li>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="pink"
              className="hidden peer/pink"
            />
            <div
              className="w-16 h-16 rounded-full bg-pink-500 peer-checked/pink:ring peer-checked/pink:ring-blue-500 peer-checked/pink:ring-offset-4"
            ></div>
          </label>
        </li>
      </ul> */}
