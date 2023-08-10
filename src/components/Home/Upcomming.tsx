import React from 'react'
import UpcommingSwiper from '../shared/UpcommingSwiper'
import getUpcommingMovie from '../../../api/getUpcommingMovie'

export default async function Upcomming() {

    const upcomming = await getUpcommingMovie();
  return (
    <UpcommingSwiper data={upcomming} title='🍿 Sắp ra mắt' mediatype='movie'/>
  )
}
