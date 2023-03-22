import { Conditions } from "@/constants";
import { Item } from "@/types";
import { priceFormatter } from "@/utils";
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
        <h2 className={styles.price}>
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
        </h2>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.condition}>{Conditions[condition] || condition}</span>
      </div>
    </div>
  );
}
