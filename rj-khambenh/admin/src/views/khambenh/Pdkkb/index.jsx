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
import { getPdkkbs, deletePdkkb } from "src/redux/action-creators";
import ModalPdkkb from "./ModalPdkkb";

const Pdkkb = () => {
  const dispatch = useDispatch();
  const [oldPdkkb, setOldPdkkb] = useState({});
  const [modal, setModal] = useState(false);

  const { pdkkbs } = useSelector((state) => state.pdkkb);

  useEffect(() => {
    dispatch(getPdkkbs());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldPdkkb(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePdkkb(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(pdkkbs);

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
                items={pdkkbs}
                fields={[
                  "Mã Số",
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
      <ModalPdkkb modal={modal} setModal={setModal} oldPdkkb={oldPdkkb} />
    </>
  );
};

export default Pdkkb;
