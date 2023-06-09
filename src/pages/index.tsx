import Head from 'next/head';
import MainLayout from '@/components/MainLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Buscador</title>
        <meta name="description" content="Buscador de productos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout initialSearch='' />
    </>
  )
}
