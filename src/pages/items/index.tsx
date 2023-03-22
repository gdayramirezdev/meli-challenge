import { MainLayout } from '@/components';
import { Breadcumb } from '@/components/Breadcumb';
import Results from '@/components/Results';
import ApiService from '@/services/ApiService';
import { Item } from '@/types';
import { useRouter } from 'next/router'

interface ItemsProps {
  autor: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
}

export default function Items({ categories, items }: ItemsProps) {
  const router = useRouter()
  const search = router.query.search as string

  return (
    <MainLayout initialSearch={search}>
      <Breadcumb categories={categories}/>
      <Results items={items}/>
    </MainLayout>
  );
}

export async function getServerSideProps(context: any) {
  const apiService = new ApiService();
  const result = await apiService.getItems(context.query.search);
  return {
    props: {
      ...result,
    },
  };
}
