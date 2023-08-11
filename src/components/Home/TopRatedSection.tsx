import React from 'react'
import getTopRatedTV from "../../../api/getTopRatedTV"
import LastestUpdate from '../shared/LastestUpdate';

export default async function TopRatedSection() {
    const data = await getTopRatedTV();
  return (
    <LastestUpdate data={data} title='Chương trình được đánh giá cao' mediatype='tv' />
  )
}
