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
  createLephi,
  getBenhnhans,
  updateLephi,
} from "src/redux/action-creators";

const ModalLephi = ({ modal, setModal, oldLephi }) => {
  const dispatch = useDispatch();

  const { benhnhans } = useSelector((state) => state.benhnhan);

  useEffect(() => {
    dispatch(getBenhnhans());
  }, [dispatch]);

  const [lephi, setLephi] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setLephi({ ...lephi, [name]: value });
  };

  useEffect(() => {
    if (oldLephi) {
      setLephi(oldLephi);
    }
  }, [oldLephi]);

  const handleClick = () => {
    console.log({ lephi, oldLephi });
    if (lephi.ten !== "") {
      if (Object.keys(oldLephi).length === 0) {
        lephi["mso"] = randomMaso("pd");

        dispatch(createLephi(lephi));
      } else {
        dispatch(updateLephi(lephi));
      }
      setLephi({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setLephi({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Lephi</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Bệnh Nhân</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="hosobenhnhan"
                name="hosobenhnhan"
                value={lephi.hosobenhnhan || ""}
                onChange={handleChange}
              >
                {renderOptions(benhnhans)}
              </CSelect>
            </CCol>
          </CFormGroup>

          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày Đóng</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngaydong"
                type="date"
                name="ngaydong"
                placeholder="Ngày Nhập Viện"
                value={formatInputDate(lephi.ngaydong) || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Số tiền</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="sotien"
                type="number"
                name="sotien"
                placeholder="Số tiền"
                value={lephi.sotien || 0}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={handleClick}>
          Submit
        </CButton>{" "}
        <CButton color="secondary" onClick={closeModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalLephi;
