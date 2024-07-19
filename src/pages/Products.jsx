import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'

const Products = () => {
  const path = useLocation()
  const [products, setProducts] = useState([])
  const [routerLink, setRouterLink] = useState()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(products => setProducts(products.products))

  }, [])

  console.log(products)



  return (
    <div className='p-5'>
      <BreadCrumb router1={'Dashboard'} router2={"Products"} />
      <div className='flex flex-col gap-5'>
        <div className="flex items-center justify-between">
          <p className='font-bold capitalize text-2xl text-primary'>{path.pathname.slice(1, 9)}</p>
          <button className='btn btn-primary '>Add Products</button>
        </div>

        <div className=''>
          <div>

          </div>
          <div className='flex flex-col gap-2'>
            {products.map((item, id) => (
              <div className='flex items-center py-2 border-primary px-2 border-2 rounded-lg border-opacity-35'>
                <div className='flex-1 max-w-[30px]'>{item.id}</div>
                <div className='flex-1'>
                  <img src={item.thumbnail} className='size-10 rounded-full' alt="" />
                </div>
                <div className='flex-1'>
                  <p>{item.name}</p>
                  <p></p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Products