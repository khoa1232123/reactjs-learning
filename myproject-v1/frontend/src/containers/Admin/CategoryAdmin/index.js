import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../redux/actions';
import { Form, Modal } from 'react-bootstrap';

const CategoryAdmin = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  console.log(category);
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const editCate = (id) => {
    console.log(id);
  };

  const catTree = (categories, level = 0) => {
    const showLevel = '--';
    let t = [];
    for (let cat of categories) {
      console.log(level);
      t.push(
        <tr key={cat._id}>
          <td>
            {showLevel.repeat(level)} {cat.name}
          </td>
          <td>{cat.description}</td>
          <td>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => editCate(cat._id)}
            >
              Edit
            </button>{' '}
            <button className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      );
      if (cat.children.length) {
        t.push(catTree(cat.children, level + 1));
      }
    }
    return t;
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Category</h1>

        <button
          className="btn btn-primary btn-sm"
          onClick={() => setShow(true)}
        >
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
              <tbody>{catTree(category.categories, 0)}</tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Create New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Parent</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => setShow(false)}
            >
              Close
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => setShow(false)}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default CategoryAdmin;
