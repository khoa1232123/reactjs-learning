import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { formatDate } from "src/helpers";
import { getPxnvs, deletePxnv } from "src/redux/action-creators";
import ModalPxnv from "./ModalPxnv";

const Pxnv = () => {
  const dispatch = useDispatch();
  const [oldPxnv, setOldPxnv] = useState({});
  const [modal, setModal] = useState(false);

  const { pxnvs } = useSelector((state) => state.pxnv);

  useEffect(() => {
    dispatch(getPxnvs());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldPxnv(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePxnv(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(pxnvs);

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Posts</span>
              <CButton color="success" onClick={handleClick}>
                Add Post
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={pxnvs}
                fields={[
                  "Mã Số",
                  "Ngày Nhập viện",
                  "Ngày Xuất viện",
                  "Mã Bệnh Nhân",
                  "Tên bệnh nhân",
                  "email",
                  "Số điện thoại",
                  "actions",
                ]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  "Ngày Nhập viện": (item) => (
                    <td>{formatDate(item.ngayNhap)}</td>
                  ),
                  "Ngày Xuất viện": (item) => (
                    <td>{formatDate(item.ngayXuat)}</td>
                  ),
                  "Mã Bệnh Nhân": (item) => <td>{item.hosobenhnhan.mso}</td>,
                  "Tên bệnh nhân": (item) => <td>{item.hosobenhnhan.ten}</td>,
                  email: (item) => <td>{item.hosobenhnhan.email}</td>,
                  "Số điện thoại": (item) => (
                    <td>{item.hosobenhnhan.sodienthoai}</td>
                  ),
                  actions: (item) => (
                    <td>
                      <CButton
                        color="warning"
                        onClick={(e) => handleUpdate(item)}
                      >
                        Edit
                      </CButton>{" "}
                      <CButton
                        color="danger"
                        onClick={(e) => handleDelete(item)}
                      >
                        Delete
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <ModalPxnv modal={modal} setModal={setModal} oldPxnv={oldPxnv} />
    </>
  );
};

export default Pxnv;
