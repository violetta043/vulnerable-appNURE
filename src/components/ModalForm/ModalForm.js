import React, { useState } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";
import { Formik, Form, Field, useField } from "formik";
import "./ModalForm.css";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const ModalForm = ({ open, handleClose, title }) => {
  return (
    <div className="modal-form">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="ModalFormCard">
          <h1>{title}</h1>
          <Formik
            initialValues={{
              category: "",
              name: "",
              quantity: "",
              price: "",
              description: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              handleClose();
            }}
          >
            <Form>
              <MyTextInput label="Category" name="category" type="text" />
              <MyTextInput label="Name" name="name" type="text" />
              <MyTextInput label="Quantity" name="quantity" type="number" />
              <MyTextInput label="Price" name="price" type="text" />
              <MyTextInput
                label="Description"
                name="description"
                type="text"
                className="desr-field"
              />
              <div className="modal-form-buttons">
                <Button
                  className="cancle-button"
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
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
