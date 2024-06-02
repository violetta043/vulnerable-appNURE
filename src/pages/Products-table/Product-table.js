import './Product-table.css';
import logo_product from '../../assets/logo_products.svg';
import Button from './components/Button';
import Table from './components/Table';

const ProductTable = () => {
    return (
        <div className="ProductTable">
            <img src={logo_product} className='Product-logo'/>
            <div className='Product-button'>
                <Button />
            </div>
            <Table/>
           
        </div>
    )
}
export default ProductTable; 