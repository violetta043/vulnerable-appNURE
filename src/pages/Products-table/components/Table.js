import './Table.css'
import { MdEdit } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";


const Table = () => {
    const products = [
        {id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: '25,000.00' },
        {id: 1, category: 'Clothes', name: 'Nike M Nk Df Acd21', quantity: 22, price: '4,000.00' },
        {id: 2, category: 'Plumbing', name: 'CERSANIT MITO 17', quantity: 1337, price: '5,000.00' },
     
    ]

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