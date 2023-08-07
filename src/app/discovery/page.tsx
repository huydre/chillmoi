import Discovery from '@/components/Discovery/Discovery'
import Layout from '@/components/shared/Layout'
import React from 'react'
import getTrendingAll from '../../../api/getTrendingAll'

interface pageProps {
  params: {
    id: string;
  },
  searchParams: {[key:string]: string | string[] | undefined},
}

const page = async ({ params, searchParams }: pageProps) => {

  const page = searchParams.page || "1";
  const trending = await getTrendingAll(page);

  return (
    <Layout>
        <Discovery data={trending} />
    </Layout>
  )
}

export default page