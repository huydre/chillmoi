import Layout from '@/components/shared/Layout'
import React from 'react'
import WatchSection from '../WatchSection'
import getDetailMovie from '../../../../api/getDetailMovie'
import getRecommendationMovie from '../../../../api/getRecommendationMovie';

interface pageProps {
    params: {
      id: string;
    };
  }

const Page = async ({ params } : pageProps) => {
    const id = params.id[1];
    const data = await getDetailMovie(id);
    const recommendation = await getRecommendationMovie(id);
    console.log(id)
  return (
    <Layout>
        <WatchSection id={id} data={data} recommend={recommendation}/>
    </Layout>
  )
}

export default Page