import { Item } from '@/types';
import { addProductJsonLd, priceFormatter } from '@/utils';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/components/SummaryProduct.module.scss';

export const SummaryProduct: React.FunctionComponent<Item> = ({
  id,
  condition,
  picture,
  price,
  title,
  description,
  sold_quantity,
  free_shipping,
}) => {
  const onBuy = async (id: string): Promise<void> => {
    //Action to buy product
  };

  return (
    <section className={styles.summary}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          key="desc"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd({
            id,
            condition,
            picture,
            price,
            title,
            description,
            sold_quantity,
            free_shipping,
          })}
          key="product-jsonld"
        />
      </Head>
      <div className={styles.product}>
        <Image
          className={styles.picture}
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
