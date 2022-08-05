import Head from 'next/head';
import Image from 'next/image';
import Layout from '../layout/Layout';
import Product from '../components/Product';
import useShop from '../hooks/useShop';

export default function Home() {
  const { categorySelected } = useShop();

  return (
    <Layout page={`Menu ${categorySelected?.name}`}>
      <h1 className='text-4xl font-black'>{categorySelected?.name}</h1>
      <p className='text-2xl my-10'>
        Choose and customize your order below
      </p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {
        categorySelected?.products?.map(product => (
            <Product
              key={product.id}
              product={product}
            />
        ))
      }
      </div>
    </Layout>
  )
}
