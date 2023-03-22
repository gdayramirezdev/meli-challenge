import { Item } from '@/types';
import styles from '../styles/components/Results.module.scss';
import { ItemList } from './ItemList';

type ResultsProps = {
  items: Item[];
}

export const Results: React.FunctionComponent<ResultsProps> = ({ items }) => {
  const itemList = items.map((item) => (
    <div key={item.id}>
      <ItemList {...item} />
      <div className={styles.divider}/>
    </div>
   
  ));

  return (
    <section className={styles.items}>
      {itemList}
    </section>
  );
}

export default Results;
