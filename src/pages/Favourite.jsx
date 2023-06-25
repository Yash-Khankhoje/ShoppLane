import React from 'react';
import { useSelector } from 'react-redux';
import { fevReducer } from '../redux/reducers/fev-reducer';
import { Product } from '../components/Product';

const Favourite = () => {

    const products = useSelector((state) => state.fevReducer.fevs)

  return (
    <>
        
        <div className="container">
            <div className="row">{
                products.map((product)=><Product data={product} />)
            }
            </div>
        </div>
    </>
  )
}

export default Favourite