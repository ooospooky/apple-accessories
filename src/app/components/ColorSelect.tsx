import { FunctionComponent, Dispatch } from 'react';

interface ColorsSelectProps {
  colorsType: string[];
  colors: null | string[];
  selectedColor: string | null; // 添加 selectedColor 屬性
  setSelectedColor: Dispatch<React.SetStateAction<string>>; // 添加 setSelectedColor 屬性
}

const ColorSelect: FunctionComponent<ColorsSelectProps> = ({
  colorsType,
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">顏色 - {selectedColor}</h2>
      <ul className="flex flex-row gap-6 my-4">
        {colors?.map((color, index) => {
          return (
            <li key={color}>
              <label className="flex items-center cursor-pointer" htmlFor={`colorsType${color}`}>
                <input
                  checked={selectedColor === colorsType[index]}
                  type="radio"
                  name="color"
                  id={`colorsType${color}`}
                  value={colorsType[index]}
                  className="hidden peer/color"
                  onChange={handleColorChange}
                />
                <div
                  className={`w-16 h-16 rounded-full ${color} peer-checked/color:ring peer-checked/color:ring-blue-500 peer-checked/color:ring-offset-4`}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSelect;
