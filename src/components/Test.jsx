"use client"
import { getDataKategori } from '@/lib/data'
import React from 'react'

const Test = ({data}) => {
  return (
    <div onClick={() => console.log(data)}>Test asdada</div>
  )
}

export default Test