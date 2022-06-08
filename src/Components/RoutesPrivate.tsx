import React from 'react';
import {Navigate } from 'react-router-dom'

interface IProps {
    children: React.ReactNode,
    isAuth: boolean
}


export const RoutesPrivate = ({isAuth, children}: IProps) => {
  return (
   <>
   {
       !isAuth? <Navigate to='/login' />: children
   }
   
      </>
  )
}
