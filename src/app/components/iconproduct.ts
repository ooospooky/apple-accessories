export interface IconProductProps {
  product: string;
  src: string;
  alt: string;
}

export const iconProduct: IconProductProps[] = [
  { product: 'Mac', src: '/icon-product-mac.png', alt: 'mac' },
  { product: 'iPad', src: '/icon-product-ipad.png', alt: 'ipad' },
  { product: 'iPhone', src: '/icon-product-iphone.png', alt: 'iphone' },
  { product: '手錶', src: '/icon-product-watch.png', alt: 'watch' },
];
