import React from 'react';
import { useSelector } from 'react-redux';
import { fevReducer } from '../redux/reducers/fev-reducer';
import { Product } from '../components/Product';

const Favourite = () => {

    const products = useSelector((state) => state.fevReducer.fevs)

  return (
    <>
        Hello
        {/* <div className="container">
            jdjd
            <div className="row">{
                products.map((product)=><Product data={product} />)
            }
            </div>
        </div> */}
    </>
  )
}

export default Favourite