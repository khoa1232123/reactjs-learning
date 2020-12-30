import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, setCategoryProduct } from '../../../../redux/actions';

const Sidebar = () => {
  const category = useSelector((state) => state.category);
  const toolProduct = useSelector((state) => state.toolProduct);
  const { category: cateId } = toolProduct;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const productCatShow = ({ e, catId }) => {
    e.preventDefault();
    if (catId !== cateId) {
      dispatch(setCategoryProduct(catId));
    }
  };

  return (
    <div>
      <h4>Sidebar</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="/" onClick={(e) => productCatShow({ e, catId: '' })}>
            All Products
          </a>
        </li>
        {category.categories &&
          category.categories.map((cat) => (
            <li key={cat._id} className="list-group-item">
              <a
                href="/"
                onClick={(e) => productCatShow({ e, catId: cat._id })}
              >
                {cat.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
