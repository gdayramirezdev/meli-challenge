import { Item } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/components/ItemList.module.scss';

export const ItemList: React.FunctionComponent<Item> = ({
  id,
  condition,
  picture,
  price,
  free_shipping,
  title
}) => {
  const router = useRouter();
  const priceFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  const onSelect = () => {
    router.push({
      pathname: '/items/[id]',
      query: { id },
    })  
  };

  return (
    <div className={styles.item} onClick={onSelect}>
      <Image
        src={picture}
        alt={title}
        width='100'
        height='150'
        className={styles.picture}
      />
      <div className={styles.summary}>
        <span>
          {priceFormatter.format(price.amount)}
          {free_shipping && (
            <Image 
              src='/shipping.png'
              alt='shipping-logo'
              width='24'
              height='24' 
              className={styles.logoShipping}
            />
            )}
        </span>
        <span>{title}</span>
        <span>{condition}</span>
      </div>
      <div className={styles.divider} />
    </div>
  );
}
