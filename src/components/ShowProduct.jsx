import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, productSelectors } from './../features/productSlice.js';
import {Link} from "react-router-dom"

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll)


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  

  return (
    <div className="box mt-5">
      <Link to={"add"} className='button is-success'>Add New</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>
              <Link to={`edit/${item.id}`} className="button is-info is-small">Edit</Link>
              <button className="button is-danger is-small">Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;
