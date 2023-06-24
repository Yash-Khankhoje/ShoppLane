import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Category } from './Category';
import EndPoints from '../api/EndPoints';
import { Link, useParams } from 'react-router-dom';

export const CategoryList = () => {
  let {category} = useParams();
  category = category === 'undefined' ? '': category;

  const [categories, setCategories] = useState([]);

  const getData = () => {
    axios.get(EndPoints.CATEGORY_URL)
      .then(response => {
        console.log(response.data);
        setCategories(response.data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='header-style'>
        <Link to={'/'} className="btn  btn-lg" style={{marginLeft:'9%'}}>All</Link>
        {
          categories.map((category) => <Category data={category} />)
        }
      </div>
    </>
  )
}
