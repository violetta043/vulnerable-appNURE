import './Product-preview.css';
import logo_product from '../../assets/logo_products.svg';
import ProductCard from '../../components/ProductCart/ProductCart';

const ProductPreview = () => {
    const productsCard = [
        { id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: '25,000' },
        { id: 1, category: 'Clothes', name: 'Nike M Nk Df Acd21', quantity: 22, price: '4,000' },
        { id: 2, category: 'Plumbing', name: 'CERSANIT MITO 17', quantity: 1337, price: '5,000' },
        { id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: '25,000' },
        { id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: '25,000' },
        { id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: '25,000' },
       
    ];
    
    return(
        <div className="ProductPage">
            <img src={logo_product} className='Product-logo'/>
            <div className='Container'>
                <div className='Cards-wrapper'>
                { productsCard.map(product => <ProductCard  product={product}/>)}
                </div>
            </div>
        </div>
    )
}

export default ProductPreview; 