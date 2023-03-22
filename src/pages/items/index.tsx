import MainLayout from '@/components/MainLayout';
import Breadcumb from '@/components/Breadcumb';
import Results from '@/components/Results';
import ApiService from '@/services/ApiService';
import { Autor, Item } from '@/types';
import { useRouter } from 'next/router'
import ErrorPage from '@/components/ErrorPage';

interface ItemsProps {
  error: boolean;
  autor: Autor;
  categories: string[];
  items: Item[];
}

export default function Items({ categories, items, error }: ItemsProps) {
  const router = useRouter()
  const search = router.query.search as string

  if (error) return <ErrorPage />

  return (
    <MainLayout initialSearch={search}>
      <Breadcumb categories={categories}/>
      <Results items={items}/>
    </MainLayout>
  );
}

export async function getServerSideProps(context: any) {
  let error: boolean = false;
  const apiService = new ApiService();
  const result = await apiService.getItems(context.query.search);

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
