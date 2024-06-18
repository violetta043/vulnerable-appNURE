import './Table.css'
import { MdEdit } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";


const Table = ({products}) => {
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
                        <td className='Edit'><MdEdit /></td>
                        <td className='Delete'><FaBoxArchive /></td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        </>
    )
}

export default Table;