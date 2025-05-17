export interface IProduct {
  id: string;
  category: string;
  name: string;
  width: number;
  height: number;
  coverImage: string;
  src: { [key: string]: string[] };
  price: number;
  stripeKey: string | { [key: string]: string };
  colorsType?: null | string[];
  colors?: null | string[];
  productInfo?: string[];
  compatibilityInfo?: string[];
}
const iphoneListTo12 =
  '<b>iPhone 機型</b><br>iPhone 14 Pro<br>iPhone 14 Pro Max<br>iPhone 14<br>iPhone 14 Plus<br>iPhone 13 Pro<br>iPhone 13 Pro Max<br>iPhone 13 mini<br>iPhone 13<br>iPhone SE (第 3 代)<br>iPhone 12 Pro<br>iPhone 12 Pro Max<br>iPhone 12 mini<br>iPhone 12';
const iphoneList =
  '<b>iPhone 機型</b><br>iPhone 14 Pro<br>iPhone 14 Pro Max<br>iPhone 14<br>iPhone 14 Plus<br>iPhone 13 Pro<br>iPhone 13 Pro Max<br>iPhone 13 mini<br>iPhone 13<br>iPhone SE (第 3 代)<br>iPhone 12 Pro<br>iPhone 12 Pro Max<br>iPhone 12 mini<br>iPhone 12<br>iPhone 11 Pro<br>iPhone 11 Pro Max<br>iPhone 11<br>iPhone SE (第 2 代)<br>iPhone XS<br>iPhone XS Max<br>iPhone XR<br>iPhone X<br>iPhone 8<br>iPhone 8 Plus';
const ipadList =
  '<b>iPad 機型</b><br/>iPad Pro 12.9 吋 (第 6 代)<br/>iPad Pro 12.9 吋 (第 5 代)<br/>iPad Pro 12.9 吋 (第 4 代)<br/>iPad Pro 12.9 吋 (第 3 代)<br/>iPad Pro 12.9 吋 (第 2 代)<br/>iPad Pro 12.9 吋 (第 1 代)<br/>iPad Pro 11 吋 (第 4 代)<br/>iPad Pro 11 吋 (第 3 代)<br/>iPad Pro 11 吋 (第 2 代)<br/>iPad Pro 11 吋 (第 1 代)<br/>iPad Pro 10.5 吋<br/>iPad Air (第 5 代)<br/>iPad Air (第 4 代)<br/>iPad Air (第 3 代)<br/>iPad (第 10 代)<br/>iPad (第 9 代)<br/>iPad (第 8 代)<br/>iPad (第 7 代)<br/>iPad mini (第 6 代)<br/>iPad mini (第 5 代)';
const macList =
  '<b>Mac 機型</b><br/>MacBook Air (13 吋，M2，2022 年)<br/>MacBook Air (15 吋，M2，2023 年)<br/>MacBook Air (M1，2020 年)<br/> MacBook Pro (13 吋，M2，2022 年)<br/> MacBook Pro (13 吋，M1，2020 年)<br/> MacBook Pro (14 吋，2023 年)<br/> MacBook Pro (14 吋，2021 年)<br/> MacBook Pro (16 吋，2023 年)<br/> MacBook Pro (16 吋，2021 年)<br/> iMac (24 吋，M1，2021 年)<br/> Mac Studio (2023 年)<br/>Mac Studio (2022 年)<br/> Mac mini (2023 年)<br/> Mac mini (M1，2020 年)<br/> Mac Pro (2023 年)';
const appleWatchList = '<b>Apple Watch 錶款</b><br/>42 公釐<br/>44 公釐<br/>45 公釐<br/>49 公釐';

function formatArray(arr: string[]) {
  const result = arr.map((item) => {
    return item.replace(/\n/g, '<br/>');
  });
  return result;
}

export const allProducts: IProduct[] = [
  {
    id: '1',
    category: 'mac',
    name: '35W 雙 USB-C 埠小型電源轉接器',
    width: 266,
    height: 291,
    coverImage: '/mac/poweradapter/cover.png',
    src: {
      noColor: [
        '/mac/poweradapter/MNWM3.png',
        '/mac/poweradapter/MNWM3_AV1.png',
        '/mac/poweradapter/MNWM3_AV2.png',
      ],
    },
    stripeKey: 'price_1Nh512BVL9eNTS8OHObDFaru',
    price: 1690,
    colorsType: null,
    colors: null,
    productInfo: [
      '無論在家中、辦公室或外出時，35W 雙 USB-C 埠小型電源轉接器讓你都能同時為兩部裝置充電。精巧的尺寸與折疊式插腳，讓你輕鬆攜帶及存放。Apple 建議與 MacBook Air 搭配使用，你也可以將它與 iPhone、iPad、Apple Watch 和 AirPods 搭配使用。',
      'Apple 35W 雙 USB-C 埠小型電源轉接器',
      'USB-C',
    ],
    compatibilityInfo: [iphoneList, ipadList, macList],
  },
  {
    id: '2',
    category: 'mac',
    name: 'Studio Display',
    width: 710,
    height: 465,
    coverImage: '/mac/studioDisplay/MK0U3_FV404.png',
    src: { noColor: ['/mac/studioDisplay/MK0U3_FV404.png'] },
    stripeKey: 'price_1Nh53KBVL9eNTS8ObHdeOdGK',
    price: 45900,
  },
  {
    id: '3',
    category: 'mac',
    name: '含 Touch ID 和數字鍵盤的巧控鍵盤',
    width: 266,
    height: 291,
    coverImage: '/mac/keyboard/cover.png',
    src: {
      黑色按鍵: [
        '/mac/keyboard/black/MMMR3TA.png',
        '/mac/keyboard/black/MMMR3TA_AV1.png',
        '/mac/keyboard/black/MMMR3TA_AV2.png',
      ],
      白色按鍵: [
        '/mac/keyboard/white/MK2C3TA.png',
        '/mac/keyboard/white/MK2C3TA_AV1.png',
        '/mac/keyboard/white/MK2C3TA_AV2.png',
      ],
    },
    stripeKey: {
      黑色按鍵: 'price_1Nh55XBVL9eNTS8OHPWl4Z3Y',
      白色按鍵: 'price_1Nh56xBVL9eNTS8OSr61L6pv',
    },
    price: 5890,
    colorsType: ['黑色按鍵', '白色按鍵'],
    colors: ['bg-black', 'bg-gray-200'],
    productInfo: [
      '巧控鍵盤配備 Touch ID，提供快速、簡單且安全的認證方式，作為登入與購物之用。<br/><br/>含 Touch ID 和數字鍵盤的巧控鍵盤提供格外舒適且精準的打字體驗。它延伸了鍵盤布局，具備用於快速捲動的文件導覽控制鍵及適合玩遊戲的全尺寸方向鍵。數字鍵盤也非常適合用於試算表和財務相關應用程式上。採用無線設計，配備充電式電池，每次充電後能為鍵盤提供約一個月或更長時間的電力¹。還能與你的 Mac 自動配對，讓你立即開始工作。它並隨附一條編織的 USB-C 對 Lightning 連接線，用來連接到 Mac 上的 USB-C 埠，方便進行配對與充電。',
      '含 Touch ID 和數字鍵盤的巧控鍵盤USB-C 對 Lightning 連接線',
      '<b>尺寸與重量</b><br/>高度：0.41–1.09 公分 (0.16–0.43 吋)<br/>寬度：41.87 公分 (16.48 吋)<br/>縱深：11.49 公分 (4.52 吋)<br/>重量：0.369 公斤 (0.81 磅)**<br/><br/><b>一般</b><br/>多媒體鍵盤<br/><br/><b>連接與擴充</b><br/>藍牙<br/>Lightning 埠<br/>無線',
    ],
    compatibilityInfo: [macList],
  },
  {
    id: '4',
    category: 'mac',
    name: '巧控板',
    width: 266,
    height: 291,
    coverImage: '/mac/trackpad/cover.png',
    src: {
      黑色多點觸控表面: [
        '/mac/trackpad/black/MMMP3.png',
        '/mac/trackpad/black/MMMP3_AV1.png',
        '/mac/trackpad/black/MMMP3_AV2.png',
      ],
      白色多點觸控表面: [
        '/mac/trackpad/white/MK2D3.png',
        '/mac/trackpad/white/MK2D3_AV1.png',
        '/mac/trackpad/white/MK2D3_AV2.png',
      ],
    },
    stripeKey: {
      黑色多點觸控表面: 'price_1Nh59LBVL9eNTS8OchstdF0i',
      白色多點觸控表面: 'price_1Nh5ANBVL9eNTS8OfIqAfIZN',
    },
    price: 4390,
    colorsType: ['黑色多點觸控表面', '白色多點觸控表面'],
    colors: ['bg-black', 'bg-gray-200'],
    productInfo: [
      '巧控板採用無線技術及充電式設計，並支援完整的「多點觸控」手勢與力度觸控技術。觸控式軌跡板下方的感測器能偵測你點按力度的細微差異，讓你能用指尖操控更多功能，與你的內容產生更緊密的連結。它的無邊框玻璃表面範圍寬廣，讓你在捲動及滑動時，比以往更有效率且更舒適。<br/><br/>巧控板會與你的 Mac 自動配對，讓你可以立即開始工作。配備充電式電池，每次完全充電能提供一個月或更長時間的電力。它也隨附一條編織的 USB-C 對 Lightning 連接線，用來連接到 Mac 上的 USB-C 埠，方便進行配對與充電。',
      '巧控板<br/>USB-C 對 Lightning 連接線',
      '<b>尺寸與重量</b><br/>高度：0.49–1.09 公分 (0.19–0.43 吋)<br/>寬度：16.0 公分 (6.3 吋)<br/>縱深：11.49 公分 (4.52 吋)<br/>重量：0.230 公斤 (0.51 磅)**<br/><br/><b>一般</b><br/>力度觸控<br/>多點觸控<br/><br/><b>連接與擴充</b><br/>藍牙<br/>Lightning 埠<br/>無線',
      '支援藍牙並搭載 OS X 10.11 或以上版本的 Mac<br/>搭載 iPadOS 13.4 或以上版本的 iPad',
    ],
    compatibilityInfo: [ipadList, macList],
  },
  {
    id: '5',
    category: 'mac',
    name: '巧控滑鼠',
    width: 266,
    height: 291,
    coverImage: '/mac/mouse/cover.png',
    src: {
      黑色多點觸控表面: [
        '/mac/mouse/black/MMMQ3.png',
        '/mac/mouse/black/MMMQ3_AV1.png',
        '/mac/mouse/black/MMMQ3_AV2.png',
      ],
      白色多點觸控表面: [
        '/mac/mouse/white/MK2E3.png',
        '/mac/mouse/white/MK2E3_AV1.png',
        '/mac/mouse/white/MK2E3_AV2.png',
      ],
    },
    stripeKey: {
      黑色多點觸控表面: 'price_1Nh5CVBVL9eNTS8OTwsayHye',
      白色多點觸控表面: 'price_1Nh5DSBVL9eNTS8ObXMckoul',
    },
    price: 2790,
    colorsType: ['黑色多點觸控表面', '白色多點觸控表面'],
    colors: ['bg-black', 'bg-gray-200'],
    productInfo: [
      `巧控滑鼠採用無線及可充電式設計，且底部設計再更精進，能順暢地在桌面上滑動。多點觸控表面可讓你使用簡單手勢操作，例如滑動切換網頁和捲動瀏覽文件等。
      <br/>
      配備充電式電池，每次充電可為巧控滑鼠提供約一個月或更長時間的電力。巧控滑鼠開箱即可使用，還可自動與你的 Mac 配對，並隨附一條編織的 USB-C 對 Lightning 連接線，用來連接到 Mac 上的 USB-C 埠，方便進行配對與充電。`,
      '巧控滑鼠<br/>USB-C 對 Lightning 連接線',
      '<b>尺寸與重量</b><br/>高度：2.16 公分 (0.85 吋)<br/>寬度：5.71 公分 (2.25 吋)<br/>縱深：11.35 公分 (4.47 吋)<br/>重量：0.099 公斤 (0.22 磅)*<br/><br/><b>一般</b><br/>多點觸控<br/><br/><b>連接與擴充</b><br/>藍牙<br/>Lightning 埠<br/>無線',
      '支援藍牙並搭載 OS X 10.11 或以上版本的 Mac<br/>搭載 iPadOS 13.4 或以上版本的 iPad',
    ],
    compatibilityInfo: [ipadList, macList],
  },
  {
    id: '6',
    category: 'ipad',
    name: 'Apple Pencil (第 1 代)',
    width: 266,
    height: 291,
    coverImage: '/ipad/applePencil1st/cover.png',
    src: {
      noColor: [
        '/ipad/applePencil1st/MK0C2.jpeg',
        '/ipad/applePencil1st/MK0C2_AV1.jpeg',
        '/ipad/applePencil1st/MK0C2_AV2.jpeg',
      ],
    },
    stripeKey: 'price_1Nh5YZBVL9eNTS8OthdDEJfE',
    price: 3290,
    productInfo: formatArray([
      `Apple Pencil 大大擴展了 iPad 的威力，為創意的無限可能開啟全新境界。它能靈敏感應筆尖的壓力與傾斜角度，你可以輕易控制線條粗細、刻畫細緻陰影，進而產生一系列藝術效果。就像使用傳統鉛筆一樣自然，卻又達到像素等級的精準度。`,
      `Apple Pencil
    Lightning 轉接器
    替換筆尖
    USB-C 對 Apple Pencil 轉接器 (須使用此配件以配對第 10 代 iPad 和充電)`,
      `長度：自筆尖至磁性蓋，為 175.7 公釐 (6.92 吋)
直徑：8.9 公釐 (0.35 吋)
重量：20.7 公克 (0.73 盎司)

<b>連線</b>
藍牙
Lightning 連接器

<b>其他特色</b>
磁性蓋`,
    ]),
    compatibilityInfo: [ipadList, macList],
  },
  {
    id: '7',
    category: 'ipad',
    name: '巧控鍵盤雙面夾，適用於 iPad (第 10 代)',
    width: 710,
    height: 465,
    coverImage: '/ipad/twosideKeyboard/cover.png',
    src: {
      noColor: [
        '/ipad/twosideKeyboard/MQDP3TA.jpeg',
        '/ipad/twosideKeyboard/MQDP3TA_AV1.jpeg',
        '/ipad/twosideKeyboard/MQDP3TA_AV2.jpeg',
      ],
    },
    stripeKey: 'price_1Nh5bXBVL9eNTS8OwLMZE6Q4',
    price: 8790,
    productInfo: formatArray([
      `
      巧控鍵盤雙面夾是 iPad (第 10 代) 的最佳搭檔。不但帶來出色的打字體驗，內建的觸控式軌跡板還能讓你精準處理各項工作，更配備了 14 鍵的功能鍵列。採用兩件式設計，靈活多用，包含可拆卸式鍵盤和具備保護作用的背板，兩者都能透過磁力吸附 iPad；可調整的立架，看什麼都舒適流暢；此外，巧控鍵盤雙面夾還能隨時隨地保護你的 iPad。`,
    ]),
    compatibilityInfo: [`<b>iPad 機型</b><br/>iPad (第 10 代)`],
  },
  {
    id: '8',
    category: 'ipad',
    name: '聰穎雙面夾，適用於 iPad (第 10 代)',
    width: 266,
    height: 291,
    coverImage: '/ipad/folio/cover.png',
    src: {
      西瓜色: [
        '/ipad/folio/rose500/MQDT3.jpeg',
        '/ipad/folio/rose500/MQDT3_AV1.jpeg',
        '/ipad/folio/rose500/MQDT3_AV2.jpeg',
      ],
      晴空色: [
        '/ipad/folio/blue300/MQDU3.jpeg',
        '/ipad/folio/blue300/MQDU3_AV1.jpeg',
        '/ipad/folio/blue300/MQDU3_AV2.jpeg',
      ],
      白色: [
        '/ipad/folio/gray200/MQDQ3.jpeg',
        '/ipad/folio/gray200/MQDQ3_AV1.jpeg',
        '/ipad/folio/gray200/MQDQ3_AV2.jpeg',
      ],
    },
    stripeKey: {
      西瓜色: 'price_1Nh5daBVL9eNTS8O4sY3wYRy',
      晴空色: 'price_1Nh5eWBVL9eNTS8OWgLjPGyY',
      白色: 'price_1Nh5fRBVL9eNTS8OQ37iqNJM',
    },
    price: 2590,
    colorsType: ['西瓜色', '晴空色', '白色'],
    colors: ['bg-rose-500', 'bg-blue-500', 'bg-gray-200'],
    productInfo: formatArray([
      `
這款適用於 iPad 的聰穎雙面夾纖薄輕盈，可保護裝置的正面與背面。掀開時即可自動喚醒你的 iPad，闔上就能讓它進入睡眠狀態。聰穎雙面夾會以磁力吸附，你可輕鬆將它摺疊成不同形狀的立架，以利閱讀、觀看、打字或進行 FaceTime 通話。`,
    ]),
    compatibilityInfo: [`<b>iPad 機型</b><br/>iPad (第 10 代)`],
  },
  {
    id: '9',
    category: 'ipad',
    name: '巧控鍵盤，適用於 iPad Pro 12.9 吋 (第 6 代)',
    width: 266,
    height: 291,
    coverImage: '/ipad/keyboard/cover.png',
    src: {
      黑色: [
        '/ipad/keyboard/black/MJQK3TA.png',
        '/ipad/keyboard/black/MJQK3TA_AV1.png',
        '/ipad/keyboard/black/MJQK3TA_AV2.png',
      ],
      白色: [
        '/ipad/keyboard/gray200/MJQL3TA.jpeg',
        '/ipad/keyboard/gray200/MJQL3TA_AV1.jpeg',
        '/ipad/keyboard/gray200/MJQK3TA_AV2.png',
      ],
    },
    stripeKey: {
      黑色: 'price_1Nh5gkBVL9eNTS8OihtHSXTf',
      白色: 'price_1Nh5hYBVL9eNTS8O24oETYta',
    },
    price: 11690,
    colorsType: ['黑色', '白色'],
    colors: ['bg-black', 'bg-gray-200'],
    productInfo: formatArray([
      `
      巧控鍵盤是 iPad Pro 12.9 吋的精彩絕配。它帶來令人驚豔的打字體驗，觸控式軌跡板更開啟使用 iPadOS 的各種新方式，USB‑C 埠可用於直通充電，並能保護機身的正面及背面。巧控鍵盤採用懸臂設計，以磁力吸附 iPad Pro，讓你能順暢調整至最適合你觀看的視角。`,
      `
舒適的背光按鍵和 1 公釐鍵程的剪刀式結構，帶來安靜無聲又靈敏的打字體驗。
專為「多點觸控」手勢與 iPadOS 中的游標而設計。
順暢調整角度，提供你最適合觀看的視角。
USB-C 埠可用於為 iPad Pro 充電 ，讓你能騰出 iPad 上的連接埠用於連接其他配件。
可摺疊成保護殼，方便你帶著 iPad Pro 旅行時，保護機身的正面與背面。
      `,
    ]),
    compatibilityInfo: [
      `<b>iPad 機型</b><br/>iPad 機型
    iPad Pro 12.9 吋 (第 6 代)<br/>
    iPad Pro 12.9 吋 (第 5 代)<br/>
    iPad Pro 12.9 吋 (第 4 代)<br/>
    iPad Pro 12.9 吋 (第 3 代)<br/>`,
    ],
  },
  {
    id: '10',
    category: 'ipad',
    name: 'Apple Pencil (第 2 代)',
    width: 266,
    height: 291,
    coverImage: '/ipad/applePencil2nd/cover.png',
    src: {
      noColor: ['/ipad/applePencil2nd/MU8F2.jpeg', '/ipad/applePencil2nd/MU8F2_AV1.jpeg'],
    },
    stripeKey: 'price_1Nh5imBVL9eNTS8OUdGxfczI',
    price: 4390,
    productInfo: formatArray([
      `Apple Pencil (第 2 代) 提供像素等級的精準度，與領先業界的低延遲時間，用來繪畫、塗鴉、著色、做筆記，或在 PDF 上做標示等，再合適不過。一上手，就像使用鉛筆一樣輕鬆自然。

      Apple Pencil (第 2 代) 具備直覺式觸控表面，支援輕點兩下手勢，讓你無須放下筆就能轉換不同工具。
      
      專為 iPad Pro、iPad Air 與 iPad mini 設計，筆身一側為平整表面，能以磁力吸附於裝置上，方便自動充電與配對。`,
      `
      Apple Pencil (第 2 代)
      `,
      `長度：166 公釐 (6.53 吋)
      直徑：8.9 公釐 (0.35 吋)
      重量：20.7 公克 (0.73 盎司)
      
      <b>連線</b>
      藍牙
      
      <b>其他特色</b>
      磁力吸附與配對功能`,
    ]),
    compatibilityInfo: [ipadList],
  },
  {
    id: '11',
    category: 'iphone',
    name: 'iPhone 14 Pro MagSafe 皮革保護殼',
    width: 266,
    height: 291,
    coverImage: '/iphone/iPhone14ProLeatherCasewithMagSafeInk/cover.png',
    src: {
      墨水色: [
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/stone700/MPPJ3.jpeg',
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/stone700/MPPJ3_AV4.jpeg',
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/stone700/MPPJ3_AV5.jpeg',
      ],
      赭紅色: [
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/orange900/MPPK3.jpeg',
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/orange900/MPPK3_AV4.jpeg',
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/orange900/MPPK3_AV5.jpeg',
      ],
      森林綠色: [
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/green950/MPPH3.jpeg',
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/green950/MPPH3_AV4.jpeg',
        '/iphone/iPhone14ProLeatherCasewithMagSafeInk/green950/MPPH3_AV5.jpeg',
      ],
    },
    price: 1790,
    stripeKey: {
      墨水色: 'price_1Nh46QBVL9eNTS8ODGRFBkfS',
      赭紅色: 'price_1Nh47oBVL9eNTS8OFF4nJ6CG',
      森林綠色: 'price_1Nh5khBVL9eNTS8OYVkrxsjh',
    },
    colorsType: ['墨水色', '赭紅色', '森林綠色'],
    colors: ['bg-stone-700', 'bg-orange-900', 'bg-green-950'],
    productInfo: formatArray([
      `
這款 MagSafe 皮革保護殼由 Apple 專為搭配 iPhone 14 Pro 而設計，能為 iPhone 提供額外保護並增添風格，讓你用起來開心合意。

採用特殊鞣製和加工的皮革製成，外表觸感柔軟，並會隨著時間呈現自然的光澤質感。保護殼一貼就位，不但能緊緊貼合你的 iPhone，又絲毫不顯厚重。

保護殼內含磁石，可與 iPhone 14 Pro 完美對位，讓你每次使用都能巧妙貼合及卸除。完美對位的磁石，讓無線充電比以往更快捷、更輕鬆。充電時，只要把 iPhone 貼合在 MagSafe 充電器或放在 Qi 認證充電器上，無須取下保護殼。

如同 Apple 設計的每一款保護殼，這款保護殼在設計和製造過程中歷經數千小時的測試。因此它不僅外型出眾，更能保護 iPhone，減少因刮傷與掉落的損害。

這款保護殼以高品質柔軟皮革製成，能保護你的 iPhone。皮革為天然材質，與優質皮革腰帶一樣，經年累月使用後可能會出現皺摺、痕跡或光澤質感。搭配 MagSafe 配件使用的過程中，也會留下細微的印記。如果對此有所顧慮，建議你選擇 iPhone 14 Pro 矽膠或透明保護殼。
      `,
      `
      iPhone 14 Pro MagSafe 皮革保護殼`,
    ]),
    compatibilityInfo: [`<b>iPhone 機型</b><br/>iPhone 14 Pro`],
  },
  {
    id: '12',
    category: 'iphone',
    name: 'iPhone 14 Pro MagSafe 矽膠保護殼',
    width: 710,
    height: 465,
    coverImage: '/iphone/iPhone14ProSiliconeCasewithMagSafe/cover.png',
    src: {
      金絲雀黃色: [
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/yellow300/MQUG3.jpeg',
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/yellow300/MQUG3_AV4.jpeg',
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/yellow300/MQUG3_AV5.jpeg',
      ],
      橄欖色: [
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/zinc700/MQUH3.jpeg',
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/zinc700/MQUH3_AV4.jpeg',
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/blue500/MQUJ3_AV5.jpeg',
      ],
      晴空色: [
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/blue500/MQUJ3.jpeg',
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/blue500/MQUJ3_AV4.jpeg',
        '/iphone/iPhone14ProSiliconeCasewithMagSafe/blue500/MQUJ3_AV5.jpeg',
      ],
    },
    stripeKey: {
      金絲雀黃色: 'price_1Nh5mOBVL9eNTS8OaIrCiRIi',
      橄欖色: 'price_1Nh5nJBVL9eNTS8OqtKBShQ1',
      晴空色: 'price_1Nh5o7BVL9eNTS8OaoM9e5ly',
    },
    price: 1490,
    colorsType: ['金絲雀黃色', '橄欖色', '晴空色'],
    colors: ['bg-yellow-300', 'bg-zinc-700', 'bg-blue-500'],
    productInfo: formatArray([
      `
      這款 MagSafe 矽膠保護殼由 Apple 專為搭配 iPhone 14 Pro 而設計，能保護 iPhone，讓你用起來開心合意。

      外層的矽膠材質帶來觸感柔滑的絕佳手感，而柔軟的超細纖維內層則可提供進一步保護。
      
      保護殼內含磁石，可與 iPhone 14 Pro 完美對位，讓你每次使用都能巧妙貼合，無線充電更快捷。充電時，只要把 iPhone 貼合在 MagSafe 充電器或放在 Qi 認證充電器上，無須取下保護殼。
      
      如同 Apple 設計的每一款保護殼，這款保護殼在設計和製造過程中歷經數千小時的測試。因此它不僅外型出眾，更能保護 iPhone，減少因刮傷與掉落的損害。
      `,
      `
      iPhone 14 Pro MagSafe 矽膠保護殼`,
    ]),
    compatibilityInfo: [`<b>iPhone 機型</b><br/>iPhone 14 Pro`],
  },
  {
    id: '13',
    category: 'iphone',
    name: 'iPhone MagSafe 皮革卡套',
    width: 266,
    height: 291,
    coverImage: '/iphone/iPhoneLeatherWalletwithMagSafe/cover.png',
    src: {
      橙色: [
        '/iphone/iPhoneLeatherWalletwithMagSafe/orange500/MPPY3.jpeg',
        '/iphone/iPhoneLeatherWalletwithMagSafe/orange500/MM0Y3_AV3.png',
        '/iphone/iPhoneLeatherWalletwithMagSafe/orange500/MM0Y3_AV4.png',
      ],
      赭紅色: [
        '/iphone/iPhoneLeatherWalletwithMagSafe/orange900/MPPX3.jpeg',
        '/iphone/iPhoneLeatherWalletwithMagSafe/orange900/MM0Y3_AV3.png',
        '/iphone/iPhoneLeatherWalletwithMagSafe/orange500/MM0Y3_AV4.png',
      ],
      墨水色: [
        '/iphone/iPhoneLeatherWalletwithMagSafe/stone700/MM0Y3.png',
        '/iphone/iPhoneLeatherWalletwithMagSafe/stone700/MM0Y3_AV3.png',
        '/iphone/iPhoneLeatherWalletwithMagSafe/stone700/MM0Y3_AV4.png',
      ],
    },
    stripeKey: {
      橙色: 'price_1Nh5poBVL9eNTS8OS80khd7X',
      赭紅色: 'price_1Nh5qSBVL9eNTS8OPsGDezZC',
      墨水色: 'price_1Nh5r5BVL9eNTS8OkPswGurR',
    },
    price: 1790,
    colorsType: ['橙色', '赭紅色', '墨水色'],
    colors: ['bg-orange-500', 'bg-orange-900', 'bg-stone-700'],
    productInfo: formatArray([
      `
      全新 iPhone MagSafe 皮革卡套兼具風格與功能，用來放你的證件和信用卡，近在手邊，好方便。現在，它還支援「尋找」功能，一旦卡套與手機分離，你便會收到通知，掌握卡套最後的已知位置。

這款卡套採用特殊鞣製和加工的歐洲皮革製成，內含吸力強大的磁石，可輕鬆貼合在 iPhone 的機身背面；你甚至能將它貼合在 MagSafe 保護殼上，打造你的獨特風格。這款皮革卡套可最多放入三張卡片，並具備保護功能，可以安全收納信用卡。
      `,
      `
iPhone MagSafe 皮革卡套`,
    ]),
    compatibilityInfo: [iphoneListTo12],
  },
  {
    id: '14',
    category: 'iphone',
    name: 'AirPods Pro (第 2 代)',
    width: 266,
    height: 291,
    coverImage: '/iphone/airPodsPro2nd/cover.png',
    src: {
      noColor: [
        '/iphone/airPodsPro2nd/MQD83.jpeg',
        '/iphone/airPodsPro2nd/MQD83_AV1.jpeg',
        '/iphone/airPodsPro2nd/MQD83_AV2.jpeg',
        '/iphone/airPodsPro2nd/MQD83_AV5.jpeg',
      ],
    },
    stripeKey: 'price_1Nh5stBVL9eNTS8ODu01jvsc',
    price: 7490,
    productInfo: formatArray([
      `
      <b>再造，新聲</b>
AirPods Pro (第 2 代) 經重新再造，讓「主動式降噪」效能提升最高可達 2 倍。「適應性通透模式」可減少外部噪音，「個人化空間音訊」則為你帶來更沉浸式的音效。充電一次，電池續航力最長可達 6 小時⁷。觸控控制，讓你輕輕滑動就可調整音量。MagSage 充電盒的精進，令人稱奇。支援「精確尋找」功能¹⁵、內建揚聲器並附有掛繩孔˄。

<b>音質卓越出色</b>
升級至 H2 晶片，帶來更聰明的降噪功能與 3D 空間音效。「適應性等化」功能，可即時調整你耳中的音樂效果，高音清透乾淨、低音深沉渾厚，聲聲細節格外清晰。

<b>降噪效能提升最高可達 2 倍¹</b>
「主動式降噪」功能現可消除多達兩倍擾人的噪音，因此無論在通勤期間或需要專心時，都不會干擾聆聽體驗¹。「適應性通透模式」還能以每秒 48,000 次的頻率減少並調低噪音強度，讓你在任何環境下，都能舒適地與外界保持聯繫。

<b>個人化聆聽體驗</b>
給你完全專屬的聆聽體驗。四種尺寸 (XS、S、M、L) 的彈性矽膠耳塞套可供挑選，帶來理想的隔音密合度與服貼度。「個人化空間音訊」具備動態頭部追蹤功能，可將各種聲音元素精準置於你四周的空間，創造量身而製的聆聽體驗º。「適應性等化」功能，可調整你耳中的音樂效果，讓你每次播放，都能聽到一致的細膩音色。

<b>電池續航力更持久</b>
現在充電一次的聆聽時間最長可達 6 小時，搭配 MagSafe 充電盒使用的聆聽時間，最長可達 30 小時ººº。MagSafe 充電盒可使用 Apple Watch 充電器或 MagSafe 充電器充電，也可以使用 Lightning 連接器或 Qi 認證的充電器為其充電。

<b>充電盒煥然一新</b>
重新設計的 MagSafe 充電盒具備 U1 晶片，可支援「精確尋找」功能¹⁵，幫你找出充電盒的所在位置。如果你在充電盒附近卻找不到充電盒，也可以透過內建的揚聲器播放聲音來協助尋找。盒身附有掛繩孔˄，可讓你將充電盒掛在背包或手提袋上，隨手就能取用。AirPods Pro 和 MagSafe 充電盒均具備 IPX4 等級的抗汗抗水功能²，讓你在各種環境下使用都從容不迫。

<b>更加巧妙，無比驚歎</b>
AirPods Pro (第 2 代) 帶來比第 1 代機型更輕鬆方便的聆聽體驗。觸控控制功能讓你可在耳機柄上操作各項播放功能，輕輕上下滑動就能調整音量。透過「播報通知」功能，你可以讓 Siri 在收到重要的訊息與提示時為你讀出內容³。藉由「音訊共享」功能，你就能在任意兩對 AirPods 間輕鬆共享歌曲或節目⁴。一如既往，AirPods Pro 能自動連線至你的 iPhone 或 Apple Watch，當你在常用的 Apple 裝置間轉換時，聲音也會隨著無縫切換，流暢銜接⁵。
      `,
      `
      AirPods Pro

MagSafe 充電盒配備揚聲器與掛繩孔˄

矽膠耳塞套 (四種尺寸：XS、S、M、L)

Lightning 對 USB-C 連接線

說明文件
      `,
      `
      <b>音訊技術</b>
      主動式降噪功能
      
      適應性通透模式
      
      個人化空間音訊具備動態頭部追蹤功能º
      
      適應性等化功能
      
      透氣系統可維持壓力均衡
      
      特製的高位移範圍 Apple 驅動單體
      
      特製的高動態範圍擴音器
      
      <b>感測器</b>
      波束成形雙麥克風
      
      內向式麥克風
      
      皮膚感測器
      
      動作偵測加速度計
      
      語音偵測加速度計
      
      觸控控制
      
      <b>晶片</b>
      Apple H2 耳機晶片
      
      MagSafe 充電盒配備 Apple U1 晶片
      
      <b>控制項目</b>
      按一下即可播放、暫停或接聽電話
      
      按兩下即可跳至下一首曲目
      
      按三下即可跳回上一首曲目
      
      按住即可在主動式降噪功能與適應性通透模式之間進行切換
      
      向上或向下滑動即可調整音量
      
      說聲「嘿 Siri」即可播放歌曲、撥打電話或取得路線指引等³
      
      <b>抗汗抗水功能</b>
      抗汗抗水 (IPX4) 功能：AirPods Pro 與充電盒ºº
      尺寸與重量
      AirPods Pro (單個)⁶
      
      高度：30.9 公釐 (1.22 吋)
      
      寬度：21.8 公釐 (0.86 吋)
      
      厚度：24.0 公釐 (0.94 吋)
      
      重量：5.3 公克 (0.19 盎司)
      
      MagSafe 充電盒⁶
      
      高度：45.2 公釐 (1.78 吋)
      
      寬度：60.6 公釐 (2.39 吋)
      
      厚度：21.7 公釐 (0.85 吋)
      
      重量：50.8 公克 (1.79 盎司)
      
      <b>充電盒</b>
      可使用 MagSafe 充電器、Apple Watch 充電器、Qi 認證的充電器或 Lightning 連接器充電
      
      <b>電池</b>
      AirPods Pro
      
      充電一次的聆聽時間最長可達 6 小時 (啟用「個人化空間音訊」和「頭部追蹤」功能時，最長可達 5.5 小時)⁷
      
      充電一次的通話時間最長可達 4.5 小時⁸
      
      AirPods Pro 搭配 MagSafe 充電盒
      
      聆聽時間最長可達 30 小時¹⁰
      
      通話時間最長可達 24 小時⁹
      
      置入充電盒內 5 分鐘，能提供約 1 小時的聆聽時間¹¹，或約 1 小時的通話時間¹²
      
      <b>連結能力</b>
      藍牙 5.3 無線技術
      
      <b>輔助使用</b>
      眾多輔助使用功能可幫助身心障礙人士，盡情發揮全新 AirPods Pro的精彩。
      
      各項功能包括：
      
      即時聆聽音訊¹³
      
      耳機音量
      
      耳機調節
      
      對話增強`,
    ]),
    compatibilityInfo: [iphoneList, ipadList, macList],
  },
  {
    id: '15',
    category: 'iphone',
    name: 'iPhone 14 MagSafe 透明保護殼',
    width: 266,
    height: 291,
    coverImage: '/iphone/iPhone14ClearCasewithMagSafe/cover.png',
    src: {
      noColor: [
        '/iphone/iPhone14ClearCasewithMagSafe/MPU13.jpeg',
        '/iphone/iPhone14ClearCasewithMagSafe/MPU13_AV1.jpeg',
        '/iphone/iPhone14ClearCasewithMagSafe/MPU13_AV6.jpeg',
      ],
    },
    stripeKey: 'price_1Nh5uRBVL9eNTS8O3JPVdBVe',
    price: 1490,
    productInfo: formatArray([
      `
      這款 Apple 設計的保護殼纖薄、輕巧，且輕鬆好握，不但可展現 iPhone 14 色彩亮麗的外觀，還能提供額外的保護。
      
      保護殼採用透明聚碳酸酯及彈性材料製成，可緊密貼合各個按鈕，操作方便順手。保護殼的內外表層均塗有抗刮外膜。 所有材料與外膜均經過最佳化處理，可避免長期使用造成的黃變。
      
      保護殼內含磁石，可與 iPhone 14 完美對位，讓你每次使用都能巧妙貼合，無線充電更快捷。須要充電時，只要把 iPhone 貼合在 MagSafe 充電器或放在 Qi 認證充電器上，無須取下保護殼。
      
      如同 Apple 設計的每一款保護殼，這款保護殼在設計和製造過程中歷經數千小時的測試。因此它不僅外型出眾，更能保護 iPhone，減少因刮傷與掉落的損害。
      `,
      `iPhone 14 MagSafe 透明保護殼`,
    ]),
    compatibilityInfo: [`<b>iPhone 機型</b><br/>iPhone 14 `],
  },
  {
    id: '16',
    category: 'watch',
    name: '單圈錶環',
    width: 266,
    height: 291,
    coverImage: '/watch/soloLoop/cover.png',
    src: {
      橄欖色: [
        '/watch/soloLoop/zinc700/MQWD3ref.jpeg',
        '/watch/soloLoop/zinc700/MQWD3ref_AV1.jpeg',
        '/watch/soloLoop/zinc700/MQWD3ref_AV2.jpeg',
      ],
      芽綠色: [
        '/watch/soloLoop/lime400/MQX53ref.jpeg',
        '/watch/soloLoop/lime400/MQX53ref_AV1.jpeg',
        '/watch/soloLoop/lime400/MQX53ref_AV2.jpeg',
      ],
    },
    stripeKey: {
      橄欖色: 'price_1Nh60jBVL9eNTS8O2TXKYrVq',
      芽綠色: 'price_1Nh61lBVL9eNTS8Ovctz65JF',
    },
    price: 1600,
    colorsType: ['橄欖色', '芽綠色'],
    colors: ['bg-zinc-700', 'bg-lime-400'],
    productInfo: formatArray([
      `單圈錶環以液態矽膠橡膠製成，具延展性的獨特設計，沒有錶扣、扣環或重疊的部分，因此，配戴超舒適，戴上手腕與取下都很輕鬆方便。每條錶帶都經過紫外線特殊處理，賦予錶帶光滑如絲的外觀。游泳適用，流汗也不怕，讓你隨時隨地都能配戴。
      `,
      `Apple Watch 單圈錶環`,
      `材質 : 液態矽膠`,
    ]),
    compatibilityInfo: [appleWatchList],
  },
  {
    id: '17',
    category: 'watch',
    name: '運動型錶帶',
    width: 710,
    height: 465,
    coverImage: '/watch/sportBand/cover.png',
    src: {
      晴空色: [
        '/watch/sportBand/blue500/MR2U3ref.png',
        '/watch/sportBand/blue500/MR2U3ref_AV1.png',
        '/watch/sportBand/blue500/MR2U3ref_AV2.png',
      ],
      橄欖色: [
        '/watch/sportBand/zinc700/MR2T3ref.png',
        '/watch/sportBand/zinc700/MR2T3ref_AV1.png',
        '/watch/sportBand/zinc700/MR2T3ref_AV2.png',
      ],
      鮮橙色: [
        '/watch/sportBand/orange400/MR2R3ref.png',
        '/watch/sportBand/orange400/MR2R3ref_AV1.png',
        '/watch/sportBand/orange400/MR2R3ref_AV2.png',
      ],
    },
    stripeKey: {
      晴空色: 'price_1Nh664BVL9eNTS8O3JdeGqnA',
      橄欖色: 'price_1Nh67MBVL9eNTS8Orcu5p9Jg',
      鮮橙色: 'price_1Nh68EBVL9eNTS8OmL4eN7oH',
    },
    price: 1600,
    colorsType: ['晴空色', '橄欖色', '鮮橙色'],
    colors: ['bg-blue-500', 'bg-zinc-700', 'bg-orange-400'],
    productInfo: formatArray([
      `以特製的優異 fluoroelastomer 材質打造，讓運動型錶帶格外強韌堅耐，更是意外的輕盈柔軟。柔順緻密的材質，優雅服貼你的手腕，肌膚感受舒適自在。創新的按插式錶扣設計，確保俐落貼合`,
      `Apple Watch 運動型錶帶`,
      `材質 : Fluoroelastomer`,
    ]),
    compatibilityInfo: [appleWatchList],
  },
  {
    id: '18',
    category: 'watch',
    name: '編織單圈錶環',
    width: 266,
    height: 291,
    coverImage: '/watch/brandsoloLoop/cover.png',
    src: {
      鮮橙色: [
        '/watch/brandsoloLoop/orange400/MQYJ3ref.png',
        '/watch/brandsoloLoop/orange400/MQYJ3ref_AV1.png',
        '/watch/brandsoloLoop/orange400/MQYJ3ref_AV2.png',
      ],
      霧紫色: [
        '/watch/brandsoloLoop/purple400/MR1L3ref.png',
        '/watch/brandsoloLoop/purple400/MR1L3ref_AV1.png',
        '/watch/brandsoloLoop/purple400/MR1L3ref_AV2.png',
      ],
      橄欖色: [
        '/watch/brandsoloLoop/zinc700/MQYX3ref.png',
        '/watch/brandsoloLoop/zinc700/MQYX3ref_AV1.png',
        '/watch/brandsoloLoop/zinc700/MQYX3ref_AV2.png',
      ],
    },
    stripeKey: {
      鮮橙色: 'price_1Nh6AnBVL9eNTS8OaPGr54Vi',
      霧紫色: 'price_1Nh6fHBVL9eNTS8OcGPceYgX',
      橄欖色: 'price_1Nh6JsBVL9eNTS8OFXY4ObWd',
    },
    price: 3100,
    colorsType: ['鮮橙色', '霧紫色', '橄欖色'],
    colors: ['bg-orange-400', 'bg-purple-400', 'bg-zinc-700'],
    productInfo: formatArray([
      `每款編織單圈錶環錶帶都採用獨特的彈性設計，不但戴起來超舒適，從手腕戴上或取下也輕鬆容易。它以 16,000 條回收再生聚酯纖維紗繩細絲環繞超細矽膠線打造，使用先進、精密的編織機器製作，再以雷射切割出精準長度，達到訂製般的舒適貼合。錶帶手感柔軟且紋理豐富，還能抗汗抗水。`,
      `Apple Watch 編織單圈錶環`,
      `材質 : 聚酯纖維紗繩與矽膠線編織而成`,
    ]),
    compatibilityInfo: [appleWatchList],
  },
  {
    id: '19',
    category: 'watch',
    name: '運動型錶環',
    width: 266,
    height: 291,
    coverImage: '/watch/sportLoop/cover.png',
    src: {
      午夜色: [
        '/watch/sportLoop/zinc700/MPLA3ref.png',
        '/watch/sportLoop/zinc700/MPLA3ref_AV1.png',
        '/watch/sportLoop/zinc700/MPLA3ref_AV2.png',
      ],
      風暴藍色: [
        '/watch/sportLoop/blue900/MPLG3.png',
        '/watch/sportLoop/blue900/MPLG3_AV1.png',
        '/watch/sportLoop/blue900/MPLG3_AV2.png',
      ],
      星光色: [
        '/watch/sportLoop/yellow200/MPLE3.png',
        '/watch/sportLoop/yellow200/MPLE3_AV1.png',
        '/watch/sportLoop/yellow200/MPLE3_AV2.png',
      ],
    },
    stripeKey: {
      午夜色: 'price_1Nh6NhBVL9eNTS8OroY7TBMO',
      風暴藍色: 'price_1Nh6OmBVL9eNTS8O5uqj5Z8v',
      星光色: 'price_1Nh6PeBVL9eNTS8OVnh1Ldvs',
    },
    price: 1600,
    colorsType: ['午夜色', '風暴藍色', '星光色'],
    colors: ['bg-zinc-700', 'bg-blue-900', 'bg-yellow-200'],
    productInfo: formatArray([
      `運動型錶環柔軟、透氣又輕盈，搭配魔鬼氈扣帶，可快速地輕鬆調整。錶環以雙層尼龍織製而成，貼近皮膚的一面織圈緻密，形成舒適軟墊，同時方便排汗；反折面具備吸附力，可牢牢固定在錶環上，更加牢固耐用。`,
      `Apple Watch 運動型錶環`,
      `材質 : 尼龍織紋`,
    ]),
    compatibilityInfo: [appleWatchList],
  },
  {
    id: '20',
    category: 'watch',
    name: '米蘭式錶環',
    width: 266,
    height: 291,
    coverImage: '/watch/milaneseLoop/cover.png',
    src: {
      金色: [
        '/watch/milaneseLoop/orange200/ML763.png',
        '/watch/milaneseLoop/orange200/ML763_AV1.png',
        '/watch/milaneseLoop/orange200/ML763_AV2.png',
      ],
      銀色: [
        '/watch/milaneseLoop/zinc400/ML783.png',
        '/watch/milaneseLoop/zinc400/ML783_AV1.png',
        '/watch/milaneseLoop/zinc400/ML783_AV2.png',
      ],
      橄欖色: [
        '/watch/milaneseLoop/zinc700/ML773.png',
        '/watch/milaneseLoop/zinc700/ML773_AV1.png',
        '/watch/milaneseLoop/zinc700/ML773_AV2.png',
      ],
    },
    stripeKey: {
      金色: 'price_1Nh6RlBVL9eNTS8O5nbpcTkj',
      銀色: 'price_1Nh6SZBVL9eNTS8OCt7ouLQP',
      橄欖色: 'price_1Nh6TGBVL9eNTS8OloB5u572',
    },
    price: 3100,
    colorsType: ['金色', '銀色', '橄欖色'],
    colors: ['bg-orange-200', 'bg-zinc-400', 'bg-zinc-700'],
    productInfo: formatArray([
      `這款錶環以現代風格演繹 19 世紀末義大利米蘭的設計。平滑的不鏽鋼織網由特製的義大利設備編織而成，自然環繞你腕間。由於整個錶帶都具磁性，米蘭式錶環可任意調整，確保和你的手腕完美貼合。外加的的物理氣相沉積處理 (PVD) 塗層，讓金色不鏽鋼呈現獨特的不凡質感。`,
      `Apple Watch 米蘭式錶環`,
      `材質 : 不鏽鋼`,
    ]),
    compatibilityInfo: [appleWatchList],
  },
];
