import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let sum = 0
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return (
    <div className="container">
      {props.orders.map(el => (
        <Order onDel = {props.onDel} key ={el.id} item = {el}/>
      ))}
      <p className="sum">Сума: {new Intl.NumberFormat().format(sum)} $</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Немає товарів у кошику</h2>
    </div>
  )
}

export default function Header(props) {
  const [cardOpen, setCardOpen] = useState(false)

  return (
    <header>
        <div>
            <span className="logo">House Staff</span>
            <ul className="nav">
                <FaShoppingCart className={`shop-card-button ${cardOpen && 'active'}`} onClick ={() => setCardOpen(!cardOpen)}/>
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Кабінет</li>
            </ul>
            {cardOpen && (
              <div className="shop-card">
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className="presentation">

        </div>
    </header>
  )
}
