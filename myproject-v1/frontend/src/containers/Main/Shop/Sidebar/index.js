import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../../redux/actions';

const Sidebar = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
  return (
    <div>
      <h4>Sidebar</h4>
      <ul className="list-group">
        {category.categories &&
          category.categories.map((cat) => (
            <li key={cat._id} className="list-group-item">
              <a href="/" onClick={() => {}}>
                {cat.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
