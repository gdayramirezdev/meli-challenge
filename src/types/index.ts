export type Item = {
  condition: 'used' | 'new';
  free_shipping: boolean;
  id: string;
  picture: string;
  price: {
    amount: number;
    currency: string;
    decimals: number;
  };
  title: string;
  description: string;
  sold_quantity: number;
};

export type Autor = {
  name: string;
  lastname: string;
};
