import React from 'react';
import { Link } from 'react-router-dom';

export const Category = (props) => {

    const { } = props.data;

  return (
    <>
        <Link to={'/products/'+props.data} className="btn  btn-lg" style={{marginLeft:'7%'}}>{props.data.charAt(0).toUpperCase() + props.data.slice(1)} </Link>
    </>
  )
}
