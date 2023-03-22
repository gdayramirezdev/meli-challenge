export type Item = {
  condition: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: {
    amount: number;
    currency: string;
    decimals: number;
  };
  title: string;
};