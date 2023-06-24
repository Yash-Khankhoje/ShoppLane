import React from 'react'
import { Navbar } from '../components/Navbar'
import { CategoryList } from '../components/CategoryList'
import { ProductList } from '../components/ProductList'
import { ProductDetailsPage } from '../pages/ProductDetailsPage';

export const HomePage = () => {
  return (
    <>
    <ProductList />
    {/* <ProductDetailsPage /> */}
    </>
  )
}
