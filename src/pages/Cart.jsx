import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import OrderSummary from '../components/OrderSummary';



const Cart = () => {

    const totalItems = useSelector((state) => state.numberCart);
    const products = useSelector((state) => state.carts);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-9" style={{ marginLeft: "-8%" }}>
                        {
                            products.map((product) => <CartList data={product} />)
                        }
                    </div>
                    <div className="col-md-3">
                        <OrderSummary />
                    </div>
                </div>

            </div>


        </>
    )
}

export default Cart