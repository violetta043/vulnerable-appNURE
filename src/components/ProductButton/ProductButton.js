import "./ProductButton.css";
import { GoPlus } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalForm from "../../components/ModalForm/ModalForm";

const ProductButton = ({ addItem }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [initialValues, setInitialValues] = useState({
      category: "",
      name: "",
      quantity: "",
      price: "",
      description: "",
  })

  const handleClick = () => {
    navigate("/product-preview");
  };
 
  const handleOpen = (title) => {
    setModalTitle(title);
    setIsOpen(true);
  }
 
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <button className="Button-prev" onClick={handleClick}>
        <div className="Button-logo-prev">
          <FaRegUser color="black" size="30px" />
        </div>
        Preview
      </button>

      <button className="Button-add" onClick={() => handleOpen("Add product")}>
        <div className="Button-logo-add">
          <GoPlus color="black" size="40px"  />
        </div>
        Add product
      </button>
      <ModalForm open={isOpen} handleClose={handleClose} title={modalTitle} onSubmit={addItem} initialValues={initialValues}/>
    </>
  );
};

export default ProductButton;
