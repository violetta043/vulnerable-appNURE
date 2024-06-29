import { useLocation, useNavigate } from "react-router-dom";
import "./Product-info.css";
import logo_product from "../../assets/logo_products.svg";
import lenovoImg from "../../assets/lenovo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FcApproval } from "react-icons/fc";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const ProductInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state ? location.state.product : null;

  const handleClick = () => {
    navigate(`/product-preview`);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="Product-info">
      <div className="Product-logo-wrapper">
        <img src={logo_product} className="Product-logo" />
      </div>
      <div className="Product-info-header">
        <IoIosArrowRoundBack size="60px" onClick={handleClick} />
        <div className="Product-info-name"> {product.name}</div>
      </div>
      <div className="Wrapper-info">
        <img src={lenovoImg} className="lenovo-info" />
        <div className="Wrapper-price">
          <div className="Wrapper-have">
            <IoCheckmarkDoneCircle color="#3CD78C" size="34px" />
            <div className="info-text"> Є в наявності</div>
          </div>
          <div className="Product-info-price"> {product.price}₴</div>
          <div className="Product-info-quantity">
            Кількість: {product.quantity}
          </div>
        </div>
      </div>
      <div className="Product-info-descr-name">Опис {product.name}</div>

      <div className="Wrapper-descr">
        <div className="info">
          <span>15.6-дюймовий дисплей стандарту Full HD</span>
          <br />
          Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD
          (1920 x 1080).
        </div>

        <div className="info">
          <span>Динаміки преміум-класу</span>
          <br />
          Стереофонічні динаміки JBL, що забезпечують розкішне звучання з
          ефектом присутності, ідеально підходять для відео, ігор і музики.{" "}
        </div>

        <div className="info">
          <span>Dolby Advanced Audio</span>
          <br />
          Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна
          відтворити кришталево чіткий просторовий звук за допомогою вбудованих
          динаміків.{" "}
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
