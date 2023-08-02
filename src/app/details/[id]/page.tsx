import React from 'react'
import getDetailMovie from '../../../../api/getDetailMovie'
import DetailMovie from '../DetailMovie'

interface pageProps {
    params: { id: number}
}

const page: React.FC<pageProps> = async ({params}) => {
    const movieId = params.id;
    const details = await getDetailMovie(movieId)
  return (
    <DetailMovie data={details}/>
  )
}

export default page
