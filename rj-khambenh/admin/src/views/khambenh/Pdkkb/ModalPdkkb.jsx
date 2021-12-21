import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CSelect,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomMaso } from "src/helpers";
import { renderOptions } from "src/helpers/renderOptions";
import {
  createPdkkb,
  getBenhnhans,
  updatePdkkb,
} from "src/redux/action-creators";

const ModalPdkkb = ({ modal, setModal, oldPdkkb }) => {
  const dispatch = useDispatch();

  const { benhnhans } = useSelector((state) => state.benhnhan);

  useEffect(() => {
    dispatch(getBenhnhans());
  }, [dispatch]);

  const [pdkkb, setPdkkb] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setPdkkb({ ...pdkkb, [name]: value });
  };

  useEffect(() => {
    if (oldPdkkb) {
      setPdkkb(oldPdkkb);
    }
  }, [oldPdkkb]);

  const handleClick = () => {
    console.log({ pdkkb, oldPdkkb });
    if (pdkkb.ten !== "") {
      if (Object.keys(oldPdkkb).length === 0) {
        pdkkb["mso"] = randomMaso("pd");

        dispatch(createPdkkb(pdkkb));
      } else {
        dispatch(updatePdkkb(pdkkb));
      }
      setPdkkb({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setPdkkb({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Pdkkb</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Khoa</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="hosobenhnhan"
                name="hosobenhnhan"
                value={pdkkb.hosobenhnhan || ""}
                onChange={handleChange}
              >
                {renderOptions(benhnhans)}
              </CSelect>
            </CCol>
          </CFormGroup>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={handleClick}>
          Do Something
        </CButton>{" "}
        <CButton color="secondary" onClick={closeModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalPdkkb;
