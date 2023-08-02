import React from 'react'
import getDetailMovie from '../../../../api/getDetailMovie'
import getRecommendation from '../../../../api/getRecommendation'
import getCreditsMovie from '../../../../api/getCreditsMovie'
import DetailMovie from '../DetailMovie'
import Layout from '@/components/shared/Layout'

interface pageProps {
    params: { id: number}
}

const page: React.FC<pageProps> = async ({params}) => {
    const movieId = params.id;
    const details = await getDetailMovie(movieId);
    const recommendation = await getRecommendation(movieId);
    const credits = await getCreditsMovie(movieId);
  return (
    <Layout>
        <DetailMovie data={details} recommendation={recommendation} cast={credits.cast}/>
    </Layout>
  )
}

export default page
