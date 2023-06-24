import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {

    const [summary, setSummary] = useState({

    })

    const totalItems = useSelector((state) => state.numberCart);
    const products = useSelector((state) => state.carts);

    const getSummary = () => {
        let subTotal = 0;
        let totalBill = 0;
        products.forEach(product => {
            subTotal = subTotal + product.price;
        });
        console.log(subTotal);

        let summaryData = {
            subTotal: subTotal,
            shoppingFees: '5$',
            taxEstimation: '5$',
            totalBill: Math.ceil(subTotal) + 10
        }
        
        setSummary(summaryData);
    }

    useEffect(() => {
        getSummary();
    }, []);

  return (
    <>
            <div className='order-summary-style'>
                <div className='order-summary-header-style'>
                    <h5><b>OrderSummary</b></h5>
                    <p>Subtotal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {summary.subTotal}$</p>
                    <p>Shipping Entries &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {summary.shoppingFees}</p>
                    <p>Tax Estimation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{summary.taxEstimation}</p>
                    <p>Total Bill &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {summary.totalBill}$</p>
                </div>         
            </div>
    </>
  )
}

export default OrderSummary