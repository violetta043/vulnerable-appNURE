import React from "react";
import { Modal, Button } from "@mui/material";
import { Formik, Form, useField } from "formik";
import "./ModalForm.css";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="modal-form-lebel" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={`modal-text-input ${
          meta.touched && meta.error ? "modal-form-error-input" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="modal-form-error">{meta.error}</div>
      ) : null}
    </>
  );
};

const ModalForm = ({ open, handleClose, title, onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    category: Yup.string().required("This field is required"),
    name: Yup.string().required("This field is required"),
    quantity: Yup.number().required("This field is required"),
    price: Yup.number().required("This field is required"),
    description: Yup.string().required("This field is required"),
  });
  
  return (
    <div className="modalForm">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="ModalFormCard">
          <h1>{title}</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              onSubmit(values);
              console.log(values);
              resetForm(); 
              handleClose();
            }}
          >
            <Form>
              <MyTextInput label="Category" name="category" type="text" />
              <MyTextInput label="Name" name="name" type="text" />
              <MyTextInput label="Quantity" name="quantity" type="number" />
              <MyTextInput label="Price" name="price" type="number" />
              <MyTextInput
                label="Description"
                name="description"
                type="text"
                className="descrField"
              />
              <div className="modalFormButtons">
                <Button
                  className="cancelButton"
                  variant="contained"
                  onClick={handleClose}
                  sx={{ backgroundColor: '#726969', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained" 
                sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}>
                  Submit
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
