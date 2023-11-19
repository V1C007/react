import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (title) => {
    const updatedCart = cartItems.filter((product) => product.title !== title);
    setCartItems(updatedCart);
  };

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="h-[90vh] flex gap-8 p-8">
          <Sidebar />
          <div className="flex-1 h-full overflow-y-scroll">
            {/* portada */}
            <div className="rounded-2-xl">
              <img src="https://i.imgur.com/R0R491Q.png" className="w-full h-[300px] object-cover object-bottom rounded-2xl" />
            </div>

            {/* Card */}
            <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-4">
              <Card
                img="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/7dfb4ae7-edd1-4c87-8303-bd514f83ec07/fecha-de-lanzamiento-del-nike-sb-x-tightbooth%C2%AE%EF%B8%8E-dunk-low-pro-black-and-white-fd2629-100.jpg"
                title="Nike SB x TIGHTBOOTH"
                category="Casuales"
                price="1299"
                addToCart={() =>
                  addToCart({
                    title: "Nike SB x TIGHTBOOTH",
                    price: 1299,
                    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/7dfb4ae7-edd1-4c87-8303-bd514f83ec07/fecha-de-lanzamiento-del-nike-sb-x-tightbooth%C2%AE%EF%B8%8E-dunk-low-pro-black-and-white-fd2629-100.jpg",
                    quantity: 1,
                  })
                }
              />
              <Card
                img="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/836fb56c-532a-42d7-97fb-0dfde6f03778/fecha-de-lanzamiento-del-air-force-1-low-chocolate-fd7039-200.jpg"
                title="Air Force 1 Low"
                category="Casuales"
                price="499"
                addToCart={() =>
                  addToCart({
                    title: "Air Force 1 Low",
                    price: 499,
                    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/836fb56c-532a-42d7-97fb-0dfde6f03778/fecha-de-lanzamiento-del-air-force-1-low-chocolate-fd7039-200.jpg",
                    quantity: 1,
                  })
                }
              />
              <Card
                img="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/de6f1ae2-796e-4b5e-9021-eb8c3d767fc3/fecha-de-lanzamiento-del-air-force-1-07-high-oil-green-fn4190-300.jpg"
                title="Oil Green"
                category="Casuales"
                price="1480"
                addToCart={() =>
                  addToCart({
                    title: "Oil Green",
                    price: 1480,
                    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/de6f1ae2-796e-4b5e-9021-eb8c3d767fc3/fecha-de-lanzamiento-del-air-force-1-07-high-oil-green-fn4190-300.jpg",
                    quantity: 1,
                  })
                }
              />
              <Card
                img="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/9a5d682b-04f3-405d-8aa0-401e8daedf81/fecha-de-lanzamiento-del-zoom-vomero-5-velvet-brown-and-medium-ash-fq8174-237.jpg"
                title="Velvet Brown"
                category="Para correr"
                price="2300"
                addToCart={() =>
                  addToCart({
                    title: "Velvet Brown",
                    price: 2300,
                    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/9a5d682b-04f3-405d-8aa0-401e8daedf81/fecha-de-lanzamiento-del-zoom-vomero-5-velvet-brown-and-medium-ash-fq8174-237.jpg",
                    quantity: 1,
                  })
                }
              />
              <Card
                img="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/09a50d1d-66c6-4a5b-8e56-8ec1e94a941d/fecha-de-lanzamiento-del-air-jordan-5-plaid-fd4814-008.jpg"
                title="Air Jordan 5"
                category="Casuales"
                price="1099"
                addToCart={() =>
                  addToCart({
                    title: "Air Jordan 5",
                    price: 1099,
                    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/09a50d1d-66c6-4a5b-8e56-8ec1e94a941d/fecha-de-lanzamiento-del-air-jordan-5-plaid-fd4814-008.jpg",
                    quantity: 1,
                  })
                }
              />
            </div>

            {/* Puedes mostrar el contenido del carrito de compras aquí */}
            <div>
              <h2>Carrito de compras</h2>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.title} - ${item.price}
                  </li>
                ))}
              </ul>
            </div>
            {/* Utiliza el componente Cart para mostrar el contenido del carrito de compras */}
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
