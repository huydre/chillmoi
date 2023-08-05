import Layout from '@/components/shared/Layout'
import React from 'react'
import WatchSection from '../WatchSection'

interface pageProps {
    params: {
      id: string;
    };
  }

const Page = ({ params } : pageProps) => {
    const id = params.id[1];
    console.log(id)
  return (
    <Layout>
        <WatchSection id={id} />
    </Layout>
  )
}

export default Page