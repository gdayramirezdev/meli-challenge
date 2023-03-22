import ErrorPage from '@/components/ErrorPage';
import MainLayout from '@/components/MainLayout'
import SummaryProduct from '@/components/Product';
import ApiService from '@/services/ApiService';
import { Autor, Item } from '@/types';

type SummaryItemProps = {
  error: boolean;
  autor: Autor;
  item: Item;
};

export const SummaryItem: React.FunctionComponent<SummaryItemProps> = ({item, autor, error}) => {

  if (error) return <ErrorPage />
  
  return (
      <MainLayout initialSearch={''}>
        <SummaryProduct {...item}/>
      </MainLayout>
  );
}

export async function getServerSideProps(context: any) {
  let error: boolean = false;
  const apiService = new ApiService();
  const result = await apiService.getItem(context.query.id);

  if (result.showError) {
    error = true;
  }
  return {
    props: {
      error,
      ...result,
    },
  };
}
export default SummaryItem;