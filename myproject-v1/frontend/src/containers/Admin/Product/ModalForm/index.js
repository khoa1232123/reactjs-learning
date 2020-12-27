import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { convertCats } from '../../../../helps/utils';
import {
  createProduct,
  getAllCategory,
  getProductById,
  updateProduct,
} from '../../../../redux/actions';

const ModalForm = ({ show, setShow, updateProductId = '' }) => {
  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [priceSale, setPriceSale] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [productCat, setProductCat] = useState('');
  const [productPictures, setProductPictures] = useState('');

  const [catList, setCatList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  useEffect(() => {
    if (updateProductId) {
      dispatch(getProductById(updateProductId));
    } else {
      setClear();
    }
  }, [dispatch, updateProductId]);

  useEffect(() => {
    if (category.categories) {
      const cats = convertCats(category.categories);
      setCatList(cats);
    }
  }, [category]);

  useEffect(() => {
    if (product.productDetails) {
      const productDetails = product.productDetails;
      setName(productDetails.name);
      setPrice(productDetails.price);
      setPriceSale(productDetails.priceSale);
      setQuantity(productDetails.quantity);
      setDescription(productDetails.description);
      setProductCat(productDetails.category);
      setProductPictures(productDetails.productPictures);
    }
  }, [product.productDetails]);

  const setClear = () => {
    setName('');
    setPrice(0);
    setPriceSale(0);
    setQuantity(0);
    setDescription('');
    setProductCat('');
    setProductPictures('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateProductId) {
      const payload = {
        _id: updateProductId,
        name,
        description,
        price,
        priceSale,
        quantity,
        category: productCat,
        productPictures,
      };
      dispatch(updateProduct(payload));
    } else {
      const payload = {
        name,
        description,
        price,
        priceSale,
        quantity,
        category: productCat,
        productPictures,
      };
      dispatch(createProduct(payload));
    }
    setClear();
    dispatch(getAllCategory());
    setShow(false);
  };

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
    setClear();
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
              required
            />
          </Form.Group>
          <div className="row">
            <div className="col-6">
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group controlId="formPriceSale">
                <Form.Label>Price Sale</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price sale"
                  value={priceSale}
                  onChange={(e) => setPriceSale(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPictures">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link URL"
              value={productPictures}
              onChange={(e) => setProductPictures(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={productCat}
              onChange={(e) => setProductCat(e.target.value)}
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
