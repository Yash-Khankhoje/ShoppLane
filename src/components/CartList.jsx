import React from 'react'

const CartList = (props) => {
    const { id, title, image, price, rating, description, quantity } = props.data;
  return (
    <div className="container">
                <div className="cart-wrapper">
                    <div className="row">
                        <div>
                            <img src={image} alt="" className="img-fluid" style={{ height: '150px', width: '100px' }}/>
                        </div>
                        <div className="col-md-6" style={{ marginLeft: '10%' }}>
                            <h5><strong>Brand</strong></h5>
                            <h5 style={{color:"grey"}}>{title}</h5>
                            <h6 style={{marginTop:"25%", color:"grey"}}>
                                <span>$</span>{price}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default CartList