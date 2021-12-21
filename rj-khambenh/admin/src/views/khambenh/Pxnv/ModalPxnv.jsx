import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CInput,
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
import { formatInputDate } from "src/helpers";
import { randomMaso } from "src/helpers";
import { renderOptions } from "src/helpers/renderOptions";
import {
  createPxnv,
  getBenhnhans,
  updatePxnv,
} from "src/redux/action-creators";

const ModalPxnv = ({ modal, setModal, oldPxnv }) => {
  const dispatch = useDispatch();

  const { benhnhans } = useSelector((state) => state.benhnhan);

  useEffect(() => {
    dispatch(getBenhnhans());
  }, [dispatch]);

  const [pxnv, setPxnv] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setPxnv({ ...pxnv, [name]: value });
  };

  useEffect(() => {
    if (oldPxnv) {
      setPxnv(oldPxnv);
    }
  }, [oldPxnv]);

  const handleClick = () => {
    console.log({ pxnv, oldPxnv });
    if (pxnv.ten !== "") {
      if (Object.keys(oldPxnv).length === 0) {
        pxnv["mso"] = randomMaso("xn");

        dispatch(createPxnv(pxnv));
      } else {
        dispatch(updatePxnv(pxnv));
      }
      setPxnv({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setPxnv({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Pxnv</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Hồ sơ bệnh nhân</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="hosobenhnhan"
                name="hosobenhnhan"
                value={pxnv.hosobenhnhan || ""}
                onChange={handleChange}
              >
                {renderOptions(benhnhans)}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày Nhập viện</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngayNhap"
                type="date"
                name="ngayNhap"
                placeholder="Ngày Nhập Viện"
                value={formatInputDate(pxnv.ngayNhap) || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày Xuất viện</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngayXuat"
                type="date"
                name="ngayXuat"
                placeholder="Ngày Xuất Viện"
                value={formatInputDate(pxnv.ngayXuat) || ""}
                onChange={handleChange}
              />
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

export default ModalPxnv;
