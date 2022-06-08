import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";


export const DetallePage1 = () => {
    let params = useParams();
    console.log(params)
  return (
    <div>DeallePage1 {params.id}</div>
  )
}
