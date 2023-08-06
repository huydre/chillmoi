import Discovery from '@/components/Discovery/Discovery'
import Layout from '@/components/shared/Layout'
import React from 'react'
import getTrendingAll from '../../../api/getTrendingAll'

const page = async () => {
  const trending = await getTrendingAll();
  return (
    <Layout>
        <Discovery data={trending} />
    </Layout>
  )
}

export default page