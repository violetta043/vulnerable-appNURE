import './Table.css'
import { MdEdit } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";
import { useState } from 'react';
import AlertDialog from '../../../components/ModalWindow/Modal';
import ModalForm from '../../../components/ModalForm/ModalForm';

const Table = ({products, deleteItem, editItem}) => {
    const [open, setOpen] = useState(false);
    const [isModalFormOpen, setModalFormOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [modalTitle, setModalTitle] = useState("");

    const handleClickOpen = (id) => {
        setSelectedProduct(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null); 
    };

    const openModalForm = (title) => {
        setModalTitle(title);
        setModalFormOpen(true);
    }
    const closeModalForm = () => {
        setModalFormOpen(false);
    }


    const handleDelete = () => {
        deleteItem(selectedProduct, handleClose);
    };
    
    return(
        <>
        <h1 className='Table-name'>Products</h1>
        <table border="1" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.category}</td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td className='Edit'><MdEdit onClick={() => openModalForm("Edit product", editItem(product.id) ) }/></td>
                        <td className='Delete'><FaBoxArchive variant="outlined" 
                        onClick={() => handleClickOpen(product.id)} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <AlertDialog open={open} handleClose={handleClose} handleDelete={handleDelete} />
        <ModalForm open={isModalFormOpen} handleClose={closeModalForm} title={modalTitle} onSubmit={editItem}/>
        </>
    )
}

export default Table;

