import Discovery from '@/components/Discovery/Discovery'
import Layout from '@/components/shared/Layout'
import React from 'react'
import getTrendingAll from '../../../api/getTrendingAll'
import getGenres from '../../../api/getGenres'

interface pageProps {
  params: {
    id: string;
  },
  searchParams: {[key:string]: string | string[] | undefined},
}

const page = async ({ params, searchParams }: pageProps) => {

  const page = searchParams.page || "1";
  const trending = await getTrendingAll(page);
  const genres = await getGenres();

  return (
    <Layout>
        <Discovery data={trending} genres={genres}/>
    </Layout>
  )
}

export default page