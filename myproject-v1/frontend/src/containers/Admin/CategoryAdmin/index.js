import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertCats } from '../../../helps/utils';
import { deleteCategory, getAllCategory } from '../../../redux/actions';
import ModalForm from './ModalForm';

const CategoryAdmin = () => {
  const [show, setShow] = useState(false);
  const [updateCatId, setUpdateCatId] = useState('');
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [catList, setCatList] = useState([]);
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  useEffect(() => {
    if (category.categories) {
      const cats = convertCats(category.categories);
      setCatList(cats);
    }
  }, [category]);

  const editCate = (id) => {
    setUpdateCatId(id);
    setShow(true);
  };

  const addCate = () => {
    setUpdateCatId('');
    setShow(true);
  };

  const deleteCate = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('You want to delete this category')) {
      dispatch(deleteCategory(id));
      dispatch(getAllCategory());
      const cats = convertCats(category.categories);
      setCatList(cats);
    }
  };

  const catTree = (categories, level = 0) => {
    const showLevel = '-- ';
    let t = [];
    for (let cat of categories) {
      t.push(
        <tr key={cat._id}>
          <td>
            {showLevel.repeat(level)}
            {cat.name}
          </td>
          <td>{cat.description}</td>
          <td>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => editCate(cat._id)}
            >
              Edit
            </button>{' '}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteCate(cat._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
      if (cat.children && cat.children.length) {
        t.push(catTree(cat.children, level + 1));
      }
    }
    return t;
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Category</h1>

        <button className="btn btn-primary btn-sm" onClick={addCate}>
          Add Category
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
                  <th>Name</th>
                  <th>Description</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>{category.categories ? catTree(catList, 0) : ''}</tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalForm show={show} setShow={setShow} updateCatId={updateCatId} />
    </div>
  );
};

export default CategoryAdmin;
