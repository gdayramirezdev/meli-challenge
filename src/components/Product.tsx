import { Item } from '@/types';
import Image from 'next/image';
import styles from '../styles/components/SummaryProduct.module.scss';

export const SummaryProduct: React.FunctionComponent<Item> = ({
  id,
  condition,
  picture,
  price,
  title,
  description,
  sold_quantity
}) => {
  const priceFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  const onBuy = async (id: string): Promise<void> => {
    //Action to buy product
  };

  return (
    <section className={styles.summary}>
      <div className={styles.product}>
        <Image
          src={picture}
          width='300'
          height='400'
          alt={`product: ${title}`}
        />
        <h2 className={styles.subtitle}>
          Descripción del producto
        </h2>
        <span className={styles.description}>
          {description}
        </span>
      </div>
      <div className={styles.price}>
        <span className={styles.condition}>
          {condition} - {sold_quantity} vendidos
        </span>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.amount}>
          {priceFormatter.format(price.amount)}
        </span>
        <button className={styles.buyButton} onClick={ () => onBuy(id) }>
          Comprar
        </button>
      </div>
    </section>
  );
}

export default SummaryProduct;
