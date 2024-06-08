import './ProductCart.css';
import lenovoImg from '../../assets/lenovo.png';
import { PiShoppingCartLight } from "react-icons/pi";


const ProductCard = ({index}) => {
    const productsCard = [
        { id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: '25,000' },
        { id: 1, category: 'Clothes', name: 'Nike M Nk Df Acd21', quantity: 22, price: '4,000' },
        { id: 2, category: 'Plumbing', name: 'CERSANIT MITO 17', quantity: 1337, price: '5,000' },
    ];

    const product = productsCard[index % productsCard.length];

    return(
        <div className="Card">
            <img src={lenovoImg} className='lenovo'/>
            <div className='Product-descr'>
                <div key={product.id} > 
                    <p className='Product-name'>{product.name}</p>
                    <div className='Wrapper'>
                        <div className='Price'>{product.price}</div>
                        <div className='Quantity'>Кількість:{product.quantity}</div>
                    </div>
                    <div className='Buy-section'>
                        <PiShoppingCartLight color='05BC52' size='45px' className='ShoppingCart'/>
                        <div className='Buy'>Готовий до відправки</div>
                    </div>
                </div>
            </div>
        </div> 
        
    )
}

export default ProductCard; 

