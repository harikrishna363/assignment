import {Component} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {PiShoppingBagBold} from 'react-icons/pi'

import CategoryItem from './components/CategoryItem'
import './App.css'

const categoryItems = [
  {
    id: 'SPECIALS',
    name: 'Specials',
  },
  {
    id: 'CLASSIC RANGE',
    name: 'Classic Range',
  },
  {
    id: 'VEGETARIAN',
    name: 'Vegetarian',
  },
  {
    id: 'CHICKEN',
    name: 'Chicken',
  },
  {
    id: 'MEAT',
    name: 'Meat',
  },
  {
    id: 'SEAFOOD',
    name: 'Seafood',
  },
  {
    id: 'STANDARD SIDES',
    name: 'Standard Sides',
  },
  {
    id: 'CLASSIC SIDES',
    name: 'Classic Sides',
  },
  {
    id: 'FAVOURITE SIDES',
    name: 'Favorite Sides',
  },
  {
    id: 'PASTAS',
    name: 'Pastas',
  },
  {
    id: 'DRINKS',
    name: 'Drinks',
  },
  {
    id: 'DESSERTS',
    name: 'Desserts',
  },
]

class App extends Component {
  state = {activeTab: categoryItems[0].id}

  updateActiveId = id => this.setState({activeTab: id})

  render() {
    const {activeTab} = this.state
    return (
      <div className="App-container">
        <nav className="nav-container">
          <img
            className="brand"
            alt="logo"
            src="https://bno-restaurant-images.imgix.net/b00011ff-eae3-4a02-b764-f659125891f6.png?lossless=1"
          />
          <div className="nav-menu-items">
            <div className="nav-menu-item">
              <p>Favourite</p>
              <AiOutlineHeart size="20" className="menu-item-icon" />
            </div>
            <div className="nav-menu-item">
              <p>Login/Sign Up</p>
              <BsPersonCircle size="20" className="menu-item-icon" />
            </div>
          </div>
        </nav>
        <div className="banner">
          <a
            href="https://www.pizzaboyz.co.nz/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="logo"
              src="https://bno-restaurant-images.imgix.net/b00011ff-eae3-4a02-b764-f659125891f6.png?lossless=1"
            />
          </a>

          <p>GLEN EDEN</p>
        </div>
        <div className="home-container">
          <ul className="item-categories-ul-container">
            {categoryItems.map(eachItem => (
              <CategoryItem
                updateActiveId={this.updateActiveId}
                key={eachItem.id}
                item={eachItem}
                activeTab={activeTab}
              />
            ))}
          </ul>
          <div className="items-list-container">
            <div id="Specials">
              <h1>Specials</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Just Sides</p>
                    <p className="item-description">Any 2 Standard Sides</p>
                  </div>
                  <p className="item-price">$9.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Single Meal</p>
                    <p className="item-description">
                      1 x Signature Range Pizza plus 2 x Standard Sides
                    </p>
                  </div>
                  <p className="item-price">$24.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Mixed Meal</p>
                    <p className="item-description">
                      1 x Signature Range Pizza, 1 x Classic Range Pizza plus 2
                      x Standard Sides
                    </p>
                  </div>
                  <p className="item-price">$37.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Twin Meal</p>
                    <p className="item-description">
                      2 x Signature Range Pizza plus 2 x Standard Sides
                    </p>
                  </div>
                  <p className="item-price">$40.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Half & Half Pizza</p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Signature Trio</p>
                    <p className="item-description">
                      3 x Signature Range Pizzas
                    </p>
                  </div>
                  <p className="item-price">$47.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Classic Trio</p>
                    <p className="item-description">3 x Classic Range Pizzas</p>
                  </div>
                  <p className="item-price">$38.00</p>
                </li>
              </ul>
            </div>
            <div id="Classic Range">
              <h1>Classic Range</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Cheese Lovers Pizza</p>
                    <p className="item-description">tomato base, Mozzarella</p>
                  </div>
                  <p className="item-price">$13.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Margherita Pizza</p>
                    <p className="item-description">
                      tomato base, Mozzarella, tomatoes, basil
                    </p>
                  </div>
                  <p className="item-price">$13.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Crunchy Veg Pizza</p>
                    <p className="item-description">
                      tomato base, onion, garlic, black pepper, jalapenos,
                      tomatoes, coriander, Mozzarella, capsicum, black olives
                    </p>
                  </div>
                  <p className="item-price">$13.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Pepperoni Pizza</p>
                    <p className="item-description">
                      tomato base, pepperoni, Mozzarella
                    </p>
                  </div>
                  <p className="item-price">$13.50</p>
                </li>
              </ul>
            </div>
            <div id="Vegetarian">
              <h1>Vegetarian</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Veg Delight Pizza</p>
                    <p className="item-description">
                      tomato base, Mozzarella, mushrooms, garlic, black pepper,
                      onion, capsicum, pineapple, oregano
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Veg Triple Sauce Pizza</p>
                    <p className="item-description">
                      tomato base, garlic, onion, pineapple, mayonnaise,
                      peri-peri sauce, makhani sauce,ginger, black pepper,
                      capsicum, Mozzarella, coriander
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Pesto Corn Pizza</p>
                    <p className="item-description">
                      Mozzarella , black pepper, spinach, sweet corn,
                      mayonnaise, tomatoes, capsicum, pesto sauce
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Veg Supreme Pizza</p>
                    <p className="item-description">
                      tomato base, garlic, black pepper, onion, mushrooms,
                      ginger, pineapple, jalapenos, coriander, Mozzarella,
                      capsicum, black olives
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
              </ul>
            </div>
            <div id="Chicken">
              <h1>Chicken</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Apricot Chicken Pizza</p>
                    <p className="item-description">
                      tomato base, onion, garlic, chicken, capsicum, pineapple,
                      Mozzarella, spiced apricot sauce
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Butter Chicken Pizza</p>
                    <p className="item-description">
                      tomato base, Mozzarella, chicken, butter chicken sauce
                      (contains nuts)
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Cajun Chicken Pizza</p>
                    <p className="item-description">
                      tomato base, onion, garlic, black pepper, Mozzarella,
                      tomatoes, capsicum, chilli flakes, spinach, cajun spice,
                      chicken, Garlic Aioli
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Chicken Triple Sauce Pizza</p>
                    <p className="item-description">
                      tomato base, onion, garlic, pineapple, mayonnaise,
                      chicken, capsicum, black pepper, peri-peri sauce, butter
                      chicken sauce, Mozzarella, oregano (contains nuts)
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
              </ul>
            </div>
            <div id="Meat">
              <h1>Meat</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Melting Hot Pizza</p>
                    <p className="item-description">
                      cheese sauce base, onion, garlic, pepperoni, jalapenos,
                      Mozzarella, capsicum, cabanossi
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Moroccans Lamb Pizza</p>
                    <p className="item-description">
                      tomato base, onion, garlic, black pepper, chilli flakes,
                      coriander, Mozzarella, capsicum, spiced lamb balls
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Bacon and Mushroom Pizza</p>
                    <p className="item-description">
                      tomato base, mushrooms, garlic, creamy sauce, tomatoes,
                      black pepper, bacon, streaky bacon
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">BBQ Beef and Bacon Pizza</p>
                    <p className="item-description">
                      tomato base, onion, beef cubes, bacon, BBQ sauce,
                      Mozzarella
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
              </ul>
            </div>
            <div id="Seafood">
              <h1>Seafood</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Jamaican Jerk Prawns Pizza</p>
                    <p className="item-description">
                      tomato base, pineapple, spinach, capsicum, onion, garlic,
                      coriander, black pepper, Mozzarella, spiced prawns
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Creamy Prawns and Bacon Pizza</p>
                    <p className="item-description">
                      creamy sauce, garlic, spinach, Mozzarella, prawns, black
                      pepper, bacon
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Garlic Prawns Pizza</p>
                    <p className="item-description">
                      garlic salt, onion, capsicum, prawns, black pepper,
                      oregano
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Prawn and Bacon Pizza</p>
                    <p className="item-description">
                      tomato base, Mozzarella, prawns, bacon, spinach, tomatoes,
                      black pepper, hollandaise sauce
                    </p>
                  </div>
                  <p className="item-price">$16.50</p>
                </li>
              </ul>
            </div>
            <div id="Standard Sides">
              <h1>Standard Sides</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Garlic Bread</p>
                  </div>
                  <p className="item-price">$5.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Chips</p>
                  </div>
                  <p className="item-price">$5.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Wedges</p>
                  </div>
                  <p className="item-price">$5.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Potato Hash Bites</p>
                  </div>
                  <p className="item-price">$5.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Curly Fries</p>
                  </div>
                  <p className="item-price">$5.00</p>
                </li>
              </ul>
            </div>
            <div id="Classic Sides">
              <h1>Classic Sides</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Desi Fries</p>
                  </div>
                  <p className="item-price">$7.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Cheesy Garlic Bread</p>
                  </div>
                  <p className="item-price">$7.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Spicy Garlic Bread</p>
                  </div>
                  <p className="item-price">$7.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Cheesy Wedges</p>
                  </div>
                  <p className="item-price">$*75.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Cheesy Bacon Chips</p>
                  </div>
                  <p className="item-price">$7.00</p>
                </li>
              </ul>
            </div>

            <div id="Favorite Sides">
              <h1>Favorite Sides</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Spicy Chicken Wings</p>
                  </div>
                  <p className="item-price">$12.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Spicy Tandoori Bites</p>
                  </div>
                  <p className="item-price">$12.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">BBQ Chicken Wings</p>
                  </div>
                  <p className="item-price">$12.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">BBQ Pork Ribs</p>
                  </div>
                  <p className="item-price">$12.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Cheesy Jalapeno Bites</p>
                  </div>
                  <p className="item-price">$12.00</p>
                </li>
              </ul>
            </div>
            <div id="Pastas">
              <h1>Pastas</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Beef Lasagne</p>
                  </div>
                  <p className="item-price">$13.00</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Chicken and Bacon Fettuccine</p>
                  </div>
                  <p className="item-price">$13.00</p>
                </li>
              </ul>
            </div>
            <div id="Drinks">
              <h1>Drinks</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Coke Can</p>
                    <p className="item-description">330ml</p>
                  </div>
                  <p className="item-price">$2.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Coke Zero Can</p>
                    <p className="item-description">330ml</p>
                  </div>
                  <p className="item-price">$2.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Sprite Can</p>
                    <p className="item-description">330ml</p>
                  </div>
                  <p className="item-price">$2.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">L&P Can</p>
                    <p className="item-description">330ml</p>
                  </div>
                  <p className="item-price">$2.50</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">Lift Can</p>
                    <p className="item-description">330ml</p>
                  </div>
                  <p className="item-price">$2.50</p>
                </li>
              </ul>
            </div>
            <div id="Desserts">
              <h1>Desserts</h1>
              <ul className="items-ul-container">
                <li className="item-li-container">
                  <div>
                    <p className="item-name">
                      Ben & Jerry Chocolate Chip Cookie Dough
                    </p>
                    <p className="item-description">
                      Vanilla ice cream with chunks of chocolate chip cookie
                      dough.
                    </p>
                  </div>
                  <p className="item-price">$4.99</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">BEN & JERRYS Chewy Gooey Cookie</p>
                    <p className="item-description">
                      Milk Chocolate & coconut ice cream with fudge flakes,
                      shortbread cookies & caramel l swirl.
                    </p>
                  </div>
                  <p className="item-price">$12.99</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">BEN & JERRYS Fudge Brownie.</p>
                    <p className="item-description">
                      Chocolate ice cream with fudge brownies.
                    </p>
                  </div>
                  <p className="item-price">$12.99</p>
                </li>
                <li className="item-li-container">
                  <div>
                    <p className="item-name">BEN & JERRYS The Tonight Dough</p>
                    <p className="item-description">
                      Caramel & Chocolate ice cream with chocolate cookie swirls
                      & Chunks of chocolate chip cookie dough & Peanut butter
                      cookie dough.
                    </p>
                  </div>
                  <p className="item-price">$12.99</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cart-container">
            <div className="flex-container cart-header">
              <PiShoppingBagBold size="30" className="cart-icon" />
              <p>Cart Empty</p>
            </div>
            <p>
              Your cart is currently empty. Go ahead and add some items to it
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
