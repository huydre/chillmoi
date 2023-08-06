"use client"
import React from 'react'
import {Spinner} from "@nextui-org/react";

const Loading = () => {
  return (
    <div className='h-screen grid grid-cols-1 place-content-center'>
      <Spinner size="xl"/>
    </div>
  )
}

export default Loading