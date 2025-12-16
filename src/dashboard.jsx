import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Page1 from './Page1';
import Todo from './Page2';
import FilterableProductTable from './Page3';
import UserCard from './Page4';
import Calculator from './Page6';
import Converter from './Page7';
import DigitalClockTimer from './Page8';

function MyButton(){
    return(
    <button>I am a button </button>
    );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h3>Count: {count}</h3>


      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

       <p>
        {count % 2 === 0 ? "Number is EVEN" : "Number is ODD"}
      </p>
    </div>
  );
}
function ShoppingList() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ]
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
    >
      {product.title}
    </li>
  ))
  return <ul>{listItems}</ul>
}

function MyAlertButton(){
  function handleClick(){
    alert("Hello");
  }
  return (
<button onClick={handleClick}>Click me</button>
  );
}
const PRODUCTS = [
  { category: "Fruits", price: "RS100", stocked: true, name: "Apple" },
  { category: "Fruits", price: "Rs100", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "Rs200", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "RS20", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "Rs40", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "Rs10", stocked: true, name: "Peas" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }
  
    return(
      <div>
         <button onClick={handleLogout}>Logout</button>
        <MyButton />
        <ShoppingList />
        <MyAlertButton />
        <Counter />
           <Page1 />
           <Todo />
           <FilterableProductTable products={PRODUCTS} />
            <UserCard />
               <Calculator title="Simple Calculator" />
               <Converter />
               <DigitalClockTimer title="Digital Clock & Timer" />


        </div>
    )
}
