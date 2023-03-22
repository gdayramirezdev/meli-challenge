import { MainLayout } from '@/components'
import SummaryProduct from '@/components/Product';
import ApiService from '@/services/ApiService';
import { Autor, Item } from '@/types';

type SummaryItemProps = {
  autor: Autor;
  item: Item;
};

export const SummaryItem: React.FunctionComponent<SummaryItemProps> = ({item, autor}) => {
  console.log(item);
  return (
      <MainLayout initialSearch={''}>
        <SummaryProduct {...item}/>
      </MainLayout>
  );
}

export async function getServerSideProps(context: any) {
  const apiService = new ApiService();
  const result = await apiService.getItem(context.query.id);
  return {
    props: {
      ...result,
    },
  };
}
export default SummaryItem;