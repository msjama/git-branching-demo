import './App.css';

function App() {
  const menu = [
    { id: 1, name: "Hamburger", price: "$5.99" },
    { id: 2, name: "Cheeseburger", price: "$6.99" },
    { id: 3, name: "French Fries", price: "$3.99" },
    { id: 4, name: "Onion Rings", price: "$4.99" },
    { id: 5, name: "Big Ol Burger", price: "$7.99" }
  ];

  return (
    <div className="container">
      <h1>Food Menu</h1>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
