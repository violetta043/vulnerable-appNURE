import "./Card.css";
import logo_login from "../../../assets/logo_login_page.svg";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name.trim()) setIsNameEmpty(true);
    if (!password.trim()) setIsPasswordEmpty(true);

    return name.trim() && password.trim();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return null;
    }

    async function login(name, password) {
      try {
        let response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            password: password,
          }),
        });
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          console.log("Login successful and token saved to localStorage");
          navigate("/product-table");
        } else {
          console.log("Login failed:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    login(name, password);
  };
  return (
    <div className="Card">
       <h1 className="Card-logo">Log in</h1>

      <div className="Input-login">
        <Input
          label="User Name"
          name="name"
          onInputChange={(value) => {
            setName(value);
            setIsNameEmpty(false);
          }}
          value={name}
        />
        {isNameEmpty && <div className="error">Please enter the name</div>}
      </div>
      <div className="Input-password">
        <Input
          label="Password"
          name="password"
          onInputChange={(value) => {
            setPassword(value);
            setIsPasswordEmpty(false);
          }}
          value={password}
          showIcon
        />
        {isPasswordEmpty && (
          <div className="error">Please enter the password</div>
        )}
      </div>

      <div className="Card-button" onClick={handleSubmit}>
        <Button />
      </div>
    </div>
  );
};

export default Card;
