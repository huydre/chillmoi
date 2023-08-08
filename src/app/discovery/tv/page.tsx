import Discovery from '@/components/Discovery/Discovery'
import Layout from '@/components/shared/Layout'
import React from 'react'
import getGenresTV from '../../../../api/getGenresTV'
import getDiscoverTV from "../../../../api/getDiscoverTV";
import querystring from "querystring";


interface pageProps {
  params: {
    id: string;
  },
  searchParams: {[key:string]: string | string[] | undefined},
}

const page = async ({ params, searchParams }: pageProps) => {

  const page = searchParams.page || "1";
  const genres = await getGenresTV();

  const queryString = querystring.stringify(searchParams);
  const discover = await getDiscoverTV(queryString);

  return (
    <Layout>
        <Discovery data={discover} genres={genres} mediatype={"tv"} title="Phim bộ"/>
    </Layout>
  )
}

export default page