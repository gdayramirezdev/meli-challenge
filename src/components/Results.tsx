import { Item } from '@/types';
import styles from '../styles/components/Results.module.scss';
import { ItemList } from './ItemList';

type ResultsProps = {
  items: Item[];
}

export const Results: React.FunctionComponent<ResultsProps> = ({ items }) => {
  const itemList = items.map((item) => (
    <ItemList {...item} key={item.id}/>
  ));

  return (
    <section className={styles.items}>
      {itemList}
    </section>
  );
}

export default Results;
