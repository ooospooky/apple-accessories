export interface IProduct {
  id: string;
  category: string;
  name: string;
  width: number;
  height: number;
  src: string;
  price: number;
}
export const allProducts: IProduct[] = [
  {
    id: "1",
    category: "mac",
    name: "35W 雙 USB-C 埠小型電源轉接器",
    width: 266,
    height: 291,
    src: "/mac/product-poweradapter.png",
    price: 1690,
  },
  {
    id: "2",
    category: "mac",
    name: "Studio Display",
    width: 710,
    height: 465,
    src: "/mac/product-display.png",
    price: 45900,
  },
  {
    id: "3",
    category: "mac",
    name: "含 Touch ID 和數字鍵盤的巧控鍵盤",
    width: 266,
    height: 291,
    src: "/mac/product-keyboard.png",
    price: 5890,
  },
  {
    id: "4",
    category: "mac",
    name: "巧控板",
    width: 266,
    height: 291,
    src: "/mac/product-controlboard.png",
    price: 4390,
  },
  {
    id: "5",
    category: "mac",
    name: "巧控滑鼠",
    width: 266,
    height: 291,
    src: "/mac/product-mouse.png",
    price: 2790,
  },
  {
    id: "6",
    category: "ipad",
    name: "Apple Pencil (第 1 代)",
    width: 266,
    height: 291,
    src: "/ipad/Apple_Pencil1.png",
    price: 3290,
  },
  {
    id: "7",
    category: "ipad",
    name: "巧控鍵盤雙面夾，適用於 iPad (第 10 代)",
    width: 710,
    height: 465,
    src: "/ipad/ipad_twoside_keyboard.png",
    price: 8790,
  },
  {
    id: "8",
    category: "ipad",
    name: "聰穎雙面夾，適用於 iPad (第 10 代) - 西瓜色",
    width: 266,
    height: 291,
    src: "/ipad/ipad_folio.png",
    price: 2590,
  },
  {
    id: "9",
    category: "ipad",
    name: "巧控鍵盤，適用於 iPad Pro 12.9 吋 (第 6 代) - 黑色",
    width: 266,
    height: 291,
    src: "/ipad/ipad_keyboard.png",
    price: 11690,
  },
  {
    id: "10",
    category: "ipad",
    name: "Apple Pencil (第 2 代)",
    width: 266,
    height: 291,
    src: "/ipad/Apple_Pencil2.png",
    price: 4390,
  },
];
