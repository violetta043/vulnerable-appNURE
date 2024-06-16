import './ProductCart.css';
import lenovoImg from '../../assets/lenovo.png';
import { PiShoppingCartLight } from "react-icons/pi";


const ProductCard = ({product}) => {
   

    return(
        <div className="Product-card">
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

