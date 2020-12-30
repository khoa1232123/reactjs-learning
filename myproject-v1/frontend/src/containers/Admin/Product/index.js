import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThePagination } from '../../../components';
import { getAllProduct, setDefaultProduct } from '../../../redux/actions';
import ModalForm from './ModalForm';

const Product = () => {
  const [show, setShow] = useState(false);
  const [updateProductId, setUpdateProductId] = useState('');
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDefaultProduct());
    dispatch(getAllProduct());
  }, [dispatch]);

  const updateProduct = (id) => {
    setUpdateProductId(id);
    setShow(true);
  };

  const createProduct = () => {
    setUpdateProductId('');
    setShow(true);
  };

  const renderProductList = () => {
    return (
      product.products &&
      product.products.map((product) => (
        <tr key={product._id}>
          <td>{product.name}</td>
          <td>
            {product.priceSale
              ? `${product.price}$ ${product.priceSale}$`
              : `${product.price}$`}
          </td>
          <td>{product.category.name}</td>
          <td>{product.createdBy.firstName}</td>
          <td>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => updateProduct(product._id)}
            >
              Edit
            </button>{' '}
            <button className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      ))
    );
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Product</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => createProduct()}
        >
          Add Product
        </button>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Name</th>
                  <th style={{ width: '15%' }}>Price</th>
                  <th style={{ width: '15%' }}>Category</th>
                  <th style={{ width: '15%' }}>Auth</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Auth</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>{renderProductList()}</tbody>
            </table>
          </div>
          <ThePagination />
        </div>
      </div>

      <ModalForm
        show={show}
        setShow={setShow}
        updateProductId={updateProductId}
      />
    </div>
  );
};

export default Product;
