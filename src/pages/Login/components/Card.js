import './Card.css';
import logo_login from '../../../assets/logo_login_page.svg';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const Card = () => {
    return (
        <div className="Card">
            <img src={logo_login} className='Card-logo'/>

            <div className="Input-login">
                <Input label="User Name"/>
            </div>
            <div className="Input-password">
                <Input label="Password" showIcon  />
            </div>
            <div className='Card-button'>
                <Button />
            </div>
            
        </div>
    )
}

export default Card;
