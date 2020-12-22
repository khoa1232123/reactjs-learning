import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { convertCats } from '../../../../helps/utils';
import {
  createCategory,
  getAllCategory,
  updateCategory,
} from '../../../../redux/actions';

const ModalForm = ({ show, setShow, updateCatId = '' }) => {
  const category = useSelector((state) => state.category);
  const { categories } = category;
  console.log(categories);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [parentId, setParentId] = useState('');
  const [catList, setCatList] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateCatId) {
      const payload = {
        _id: updateCatId,
        name,
        description,
      };
      if (parentId) {
        payload.parentId = parentId;
      }
      dispatch(updateCategory(payload));
    } else {
      const payload = {
        name,
        description,
        parentId,
      };
      dispatch(createCategory(payload));
    }
    setName('');
    setDescription('');
    setParentId('');
    dispatch(getAllCategory());
    setShow(false);
  };

  useEffect(() => {
    if (category.categories) {
      const cats = convertCats(category.categories);
      setCatList(cats);
    }
  }, [category]);

  useEffect(() => {
    if (updateCatId) {
      let oldCat = null;
      oldCat = categories.find((cat) => cat._id === updateCatId);
      if (oldCat) {
        setName(oldCat.name);
        setDescription(oldCat.description);
        setParentId(oldCat.parentId);
      }
    } else {
      setName('');
      setDescription('');
      setParentId('');
    }
  }, [categories, updateCatId]);

  const catTree = (categories, level = 0) => {
    const showLevel = '-- ';
    let t = [];
    for (let cat of categories) {
      t.push(
        <option key={cat._id} value={cat._id}>
          {showLevel.repeat(level)}
          {cat.name}
        </option>
      );
      if (cat.children && cat.children.length) {
        t.push(catTree(cat.children, level + 1));
      }
    }
    return t;
  };

  const onClose = () => {
    setName('');
    setDescription('');
    setParentId('');
    setShow(false);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Parent</Form.Label>
            <Form.Control
              as="select"
              value={parentId}
              onChange={(e) => setParentId(e.target.value)}
            >
              <option value="">Select Category</option>
              {catTree(catList)}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-danger btn-sm">
            Save Changes
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalForm;
