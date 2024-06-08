import './Product-preview.css';
import logo_product from '../../assets/logo_products.svg';
import ProductCard from '../../components/ProductCart/ProductCart';

const ProductPreview = () => {
    return(
        <div className="ProductPage">
            <img src={logo_product} className='Product-logo'/>
            <div className='Container'>
                <div className='Cards-wrapper'>
                    <ProductCard index={0}/>
                    <ProductCard index={1}/>
                    <ProductCard index={2}/>
                    <ProductCard index={0}/>
                    <ProductCard index={1}/>
                    <ProductCard index={2}/>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview; 