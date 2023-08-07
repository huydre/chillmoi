"use client"
import {Spinner} from "@nextui-org/react";
import React from 'react'

export default function Loading() {
  return (
    <div className='h-full grid grid-cols-1 place-content-center'>
      <Spinner size="lg"/>
    </div>
  )
}
