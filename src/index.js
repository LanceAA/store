import _ from 'lodash';
import './style.sass';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import apple from './assets/apple.jpg';
import banana from './assets/banana.jpg';
import bakery from './assets/bakery.jpg';
import bread from './assets/bread.jpeg';
import broccoli from './assets/broccoli.png';
import cake from './assets/cake.jpg';
import cereal from './assets/cereal.png';
import cheezit from './assets/Cheez-It.jpg';
import chicken from './assets/chicken.jpeg';
import coke from './assets/coke.jpg';
import cookie from './assets/cookie.jpeg';
import dairy from './assets/dairy2.jpg';
import donut from './assets/donut.png';
import dorito from './assets/dorito.jpg';
import drinks from './assets/drinks.jpg';
import groundbeef from './assets/ground-beef.jpg';
import gum from './assets/gum.jpg';
import gushers from './assets/gushers.jpg';
import kombucha from './assets/kombucha.jpg';
import lunchham from './assets/lunch-ham.png';
import meat from './assets/meat.jpg';
import muffin from './assets/muffin.jpg';
import newton from './assets/newton.jpg';
import oj from './assets/oj.png';
import orange from './assets/orange.jpg';
import pretzel from './assets/pretzel.jpg';
import produce from './assets/produce.jpg';
import redbull from './assets/redbull.jpeg';
import snacks from './assets/snacks.jpg';
import sourgummyworms from './assets/sour-gummy-worms.jpg';
import tortillachips from './assets/tortilla-chips.jpeg';
import twinkies from './assets/twinkies.jpg';
import vodka from './assets/vodka.jpg';
import water from './assets/water.jpg';
import icon from './assets/icon.png';

const entries = [
  {
    name: 'apple',
    price: .5,
    description: 'Delicious Apple',
    category: 'Produce',
    src: apple,
    quantity: '',
    unit: 'each'
  },
  {
     name: 'banana',
     price: 1.2,
     description: 'Knock knock. who\'s there? Banana. Banana who? Knock knock. who\'s there? Banana. Banana who?',
     category: 'Produce',
     src: banana,
     quantity: '',
     unit: 'each'
   },
  {
    name: 'chocolate muffin',
    price: 2.35,
    description: 'Chocolate Muffin',
    category: 'Grain',
    src: muffin,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'doritos',
    price: 2.5,
    description: 'Cheesy goodness',
    category: 'Snack',
    src: dorito,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'gushers',
    price: 1,
    description: 'Made with real fruit, yeah',
    category: 'Snack',
    src: gushers,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'redbull',
    price: 2,
    description: 'Great before bed!',
    category: 'Drink',
    src: redbull,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'orange juice',
    price: 3.15,
    description: 'Fresh squeezed',
    category: 'Drink',
    src: oj,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'honey ham lunch meat',
    price: 4.5,
    description: 'Ultra thin!',
    category: 'Meat',
    src: lunchham,
    quantity: '',
    unit: 'per pound'
  },
  {
    name: 'orange',
    price: .5,
    description: 'Orange you glad I didnt say banana',
    category: 'Produce',
    src: orange,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'broccoli',
    price: 1.5,
    description: 'Your kids will love it',
    category: 'Produce',
    src: broccoli,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'ground beef',
    price: 5.5,
    description: 'Shredded cow',
    category: 'Meat',
    src: groundbeef,
    quantity: '',
    unit: 'per pound'
  },
  {
    name: 'chicken',
    price: 5,
    description: 'Gluten free',
    category: 'Meat',
    src: chicken,
    quantity: '',
    unit: 'per pound'
  },
  {
    name: 'vodka',
    price: 14.7,
    description: 'The fun kind of water',
    category: 'Drink',
    src: vodka,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'kombucha',
    price: 2.3,
    description: 'Mushroom goop',
    category: 'Drink',
    src: kombucha,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'coke',
    price: 1,
    description: 'The better water',
    category: 'Drink',
    src: coke,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'water',
    price: .7,
    description: 'Dont die juice',
    category: 'Drink',
    src: water,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'donut',
    price: .8,
    description: 'Glazed',
    category: 'Grain',
    src: donut,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'cake',
    price: 5,
    description: 'Happy Birthday!',
    category: 'Grain',
    src: cake,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'bread',
    price: 3,
    description: 'The best invention since-',
    category: 'Grain',
    src: bread,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'cereal',
    price: 1.35,
    description: 'Whole Grain!',
    category: 'Grain',
    src: cereal,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'cookie',
    price: 1.5,
    description: 'Resealable Package!',
    category: 'Grain',
    src: cookie,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'sour gummy worms',
    price: 1.25,
    description: 'The tasty kind of bugs',
    category: 'Snack',
    src: sourgummyworms,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'cheez-it',
    price: 1.4,
    description: 'Cheesy!',
    category: 'Snack',
    src: cheezit,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'gum',
    price: .4,
    description: 'Dont swallow!',
    category: 'Snack',
    src: gum,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'tortilla chips',
    price: 1,
    description: 'Goes well with salsa!',
    category: 'Snack',
    src: tortillachips,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'pretzel',
    price: 1,
    description: 'Salty!',
    category: 'Snack',
    src: pretzel,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'twinkies',
    price: .75,
    description: 'White and cream filled',
    category: 'Snack',
    src: twinkies,
    quantity: '',
    unit: 'each'
  },
  {
    name: 'fig newton',
    price: 1,
    description: 'People like these?',
    category: 'Snack',
    src: newton,
    quantity: '',
    unit: 'each'
  }]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: props.entries,
      categoryClicked: false,
      category: '',
      search: '',
      sortBy: 'None',
      cart: [],
      checkoutPrice: '$0.00'
    };

    this.updateCategoryClicked = this.updateCategoryClicked.bind(this);
    this.calculateCheckout = this.calculateCheckout.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.resetCategory = this.resetCategory.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  clearCart() {
    const newCart = [];
    this.setState({cart: newCart}, () => {this.calculateCheckout()})
  }

  calculateCheckout() {
    const newCart = [...this.state.cart];
    const cartCost = newCart.map(e => {return parseFloat(e.price.toFixed(2)) * e.quantity});
    const cost = newCart.length > 0 ? `$${cartCost.reduce((a, b) => {return a + b}).toFixed(2)}` : '$0.00';

    this.setState({checkoutPrice: cost});
  }

  updateQuantity({target}) {
    const quantity = parseInt(target.value);
    const isNumber = typeof(quantity) == 'number';

    if (isNumber && quantity >= 0) {
      const foodItem = target.dataset.name
      const newEntries = [...this.state.entries];
      const newCart = [...this.state.cart];
      const cartIndex = newCart.map(e => e.name).indexOf(foodItem);
      const entryIndex = newEntries.map(e => e.name).indexOf(foodItem);
      const existsInCart = cartIndex != -1 ? true : false;
  
      if (existsInCart) {
        if (quantity <= 0) {
          newCart.splice(cartIndex, 1);
          newEntries[entryIndex]['quantity'] = '';
        } else {
          newCart[cartIndex]['quantity'] = quantity;
          newEntries[entryIndex]['quantity'] = quantity;
        }
        this.setState({entries: newEntries, cart: newCart}, () => {this.calculateCheckout()});
        return;
      }
      newEntries[entryIndex]['quantity'] = quantity;
      this.setState({entries: newEntries});
     }
     else {
       return;
     }
  }

  addItemToCart({target}) {
    const toBeAdded = target.dataset.key;
    const index = target.dataset.index
    const newCart = [...this.state.cart];
    const newEntries = [...this.state.entries];
    const existsInCart = (newCart.map(e => e.name).indexOf(toBeAdded) != -1) ? true : false;

    //prevents duplicate entries in cart
    if (!existsInCart && newEntries[index]['quantity'] > 0) {
      newCart.push(newEntries[index]);
      this.setState({cart: newCart}, () => {this.calculateCheckout()})
    }

  }

  updateCategoryClicked({target}) {
    if (target.tagName == 'IMG' || target.tagName == 'LI') {
      this.setState({
        categoryClicked: true,
        category: target.dataset.category
      });
    }
  }

  updateSortBy({target}) {
    if (target.tagName == 'LABEL') {
      this.setState({sortBy: target.innerHTML});
    }
  }

  updateSearch({target}) {
    this.setState({search: target.value});
  }

  resetCategory({target}) {
    if (target.tagName == "SPAN") {
      this.setState({
        categoryClicked: false,
        category: ''
      })
    }
  }

  toggleDescription({target}) {
    const description = target.nextSibling;

    if (description.style.display == "none" || description.style.display == "") {
      description.style.display = "block";
    } else if (description.style.display == "block") {
      description.style.display = "none";
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input id='cart-toggle' type='checkbox' />
        <label id='cart-icon' htmlFor='cart-toggle'>🛒</label>
        <div id='cart'>
          <div>
            <h3 id='cart-header' className='text-center'>Shopping Cart</h3>
          </div>
        <div id='cart-content'>
          <Cart cart={this.state.cart} updateQuantity={this.updateQuantity} />
        </div>
        <div>
          <div id='checkout-container'>
            <h4 className='text-center w-100'>{this.state.checkoutPrice}</h4>
            <button type='button' id='checkout-confirm' className='btn btn-block btn-outline-dark' onClick={this.clearCart}>Checkout</button>
          </div>
        </div>
      </div>
      <div className='d-flex pt-5'>
        <div id="header-text" className="w-50 d-flex m-auto justify-content-center">
          <div>
            <img className="ml-5" id="icon" src={icon}></img>
          </div>
          <div className="ml-4">
            <h1>The Grocery Store</h1>
            <h5 className="mt-3">We got lots'a stuff, so buy it</h5>
          </div>
        </div>
      </div>
      <div className='d-flex mt-5'>
        <input id='searchbar' className='form-control w-25 mx-auto' type='text' onChange={this.updateSearch} value={this.state.search} placeholder='Search...' />
      </div>
      <div id="filter-container" className='d-flex justify-content-center mt-3 pt-2 pb-2'>
        <div className='mr-5'>
          <h4>Category:</h4>
          <div className='d-flex justify-content-center mt-3'>
            {this.state.categoryClicked ? <div id='category-btn' className='btn' onClick={this.resetCategory}>{this.state.category}<span className="badge">X</span></div> : null}
          </div>
        </div>
        <div>
          <h4 id='sort-text'>Sort by:</h4>
          <div onClick={this.updateSortBy} className="radio-toolbar mt-3">
            <input id="radio1" type="radio" name="radios" />
            <label className='mr-2 radio-cover' htmlFor="radio1">None</label>
            <input id="radio2" type="radio" name="radios" />
            <label className='mr-2 radio-cover' htmlFor="radio2">Price:Low-High</label>
            <input id="radio3" type="radio" name="radios"/>
            <label className='mr-2 radio-cover' htmlFor="radio3">Price:High-Low</label>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className='d-flex justify-content-center w-25' style={{visibility: (this.state.categoryClicked || (this.state.search != '')) ? 'visible' : 'hidden'}}>
          <div id="category-side-container" className='card mt-5' onClick={this.updateCategoryClicked}>
            <h3 className='card-header'>Categories</h3>
            <ul className='list-group'>
              <li className='list-group-item' data-category='Produce'>Produce</li>
              <li className='list-group-item' data-category='Meat'>Meat</li>
              <li className='list-group-item' data-category='Snack'>Snack</li>
              <li className='list-group-item' data-category='Grain'>Bakery</li>
              <li className='list-group-item' data-category='Dairy'>Dairy</li>
              <li className='list-group-item' data-category='Drink'>Drink</li>
            </ul>
          </div>
        </div>
        {this.state.categoryClicked || (this.state.search != '') ?
        <div className='row mt-5 w-50'>
          <FilteredStocks className='col-10' entries={this.state.entries} category={this.state.category} search={this.state.search} sortBy={this.state.sortBy} addItemToCart={this.addItemToCart} updateQuantity={this.updateQuantity} toggleDescription={this.toggleDescription} />
        </div>
        :
        <Categories changeCategory={this.updateCategoryClicked} />}
      </div>
    </div>
  )}
}

const CartItem = (props) => {
  const name = props.entry.name.charAt(0).toUpperCase() + props.entry.name.slice(1);
  //gives food items in cart a color-coded background
  let color;
  switch(props.entry.category) {
    case 'Produce':
      color = 'rgba(186, 234, 186, 0.26)';
      break;
    case 'Meat':
      color = 'rgba(255, 10, 10, 0.12)';
      break;
    case 'Snack':
      color= 'rgba(255, 215, 255, 0.4)';
      break;
    case 'Grain':
      color = 'rgba(175, 96, 43, 0.1)';
      break;
    case 'Dairy':
      color = 'rgba(255, 234, 14, 0.11)';
      break;
    case 'Drink':
      color ='rgba(3, 131, 255, 0.11)';
      break;
  }

  return (
    <div className='row no-marg cart-item-container' style={{backgroundColor: color}}>
      <div className='col align-self-center'>
        <img src={props.entry.src} className='img-thumbnail cart-item-thumb'/>
      </div>
      <div className='col align-self-center'>
        <p>{name}</p>
      </div>
      <div className='col mt-3'>
        <input className='form-control' onChange={props.updateQuantity} placeholder='qt' data-name={props.entry.name} type='number' value={props.entry.quantity}/>
        <p>${(props.entry.price * props.entry.quantity).toFixed(2)}</p>
      </div>
    </div>
  )
}

const Cart = (props) => {
  return (
    props.cart.map((entry, index) => {
      return <CartItem key={index} entry={entry} {...props} />
    }));
}

const FilteredStock = (props) => {
  const name = props.entry.name.charAt(0).toUpperCase() + props.entry.name.slice(1);

  return (
    <div className='card align-items-center col-3 product-container'> 
      <img className='product-img mt-2' data-toggle='collapse' data-target={"#collapseExample" + props.index} aria-expanded="false" aria-controls={"#collapseExample" + props.index} src={props.entry.src}/>
      <div className="collapse" id={"collapseExample" + props.index}>
        <small className="form-text text-muted">{props.entry.description}</small>
      </div>
      <div className='card-body'>
        <h5 className='product-text'>{name}</h5>
        <p className='product-text'>${props.entry.price.toFixed(2)} {props.entry.unit}</p>
        <div>
          <input className='form-control' onChange={props.updateQuantity} data-index={props.index} data-name={props.entry.name} type='number' placeholder='qt.' value={props.entry.quantity}/>
          <button type='button' className='product-add-btn btn btn-success btn-block mt-1' onClick={props.addItemToCart} data-index={props.index} data-key={props.entry.name}>Add</button>
        </div>
      </div>
    </div>
  );
}

const FilteredStocks = (props) => {
  const newState = [...props.entries];
  let searchFiltered;
  let keywordFiltered;
  //Map all food items to set unique keys for later manipulation
  let mapped = newState.map((entry, index) => {
    return <FilteredStock key={index} 
                          entry={entry} 
                          index={index} 
                          addItemToCart={props.addItemToCart} 
                          updateQuantity={props.updateQuantity}
                          toggleDescription={props.toggleDescription}/>
  });

  searchFiltered = (props.search != '') ? 
    searchFiltered = mapped.filter((entry) => {
      return entry.props.entry.name.indexOf(props.search.toLowerCase()) > -1
      })
    :
    mapped;

  keywordFiltered = (props.category != '') ? 
    searchFiltered.filter((entry) => {return entry.props.entry.category == props.category}) 
    : 
    searchFiltered;

  switch(props.sortBy) {
    case 'Price:Low-High': 
      keywordFiltered.sort((a, b) => {return a.props.entry.price - b.props.entry.price;});
      break;

    case 'Price:High-Low':
      keywordFiltered.sort((a, b) => {return a.props.entry.price - b.props.entry.price;});
      keywordFiltered.reverse();
      break;

    default:
      break;
  }
  return keywordFiltered;
}

const Categories = (props) => {
  return (
  <div onClick={props.changeCategory} className='row d-flex justify-content-around w-50'>
    <div className='col-2 category-pic-container mt-5'>
      <h3 className='category-text'>Produce</h3>
      <img className='category-pic' src={produce} data-category='Produce'/>
    </div>
    <div className='col-2 category-pic-container mt-5'>
      <h3 className='category-text'>Meat</h3>
      <img className='category-pic' src={meat} data-category='Meat'/>
    </div>
    <div className='col-2 category-pic-container mt-5'>
      <h3 className='category-text'>Snack</h3>
      <img className='category-pic' src={snacks} data-category='Snack'/>
    </div>
    <div className='w-100'>
    </div>
    <div className='col-2 category-pic-container mt-5'>
      <h3 className='category-text'>Bakery</h3>
      <img className='category-pic' src={bakery} data-category='Grain'/>
    </div>
    <div className='col-2 category-pic-container mt-5'>
      <h3 className='category-text'>Dairy</h3>
      <img className='category-pic' src={dairy} data-category='Dairy'/>
    </div>
    <div className='col-2 category-pic-container mt-5'>
      <h3 className='category-text'>Drink</h3>
      <img className='category-pic' src={drinks} data-category='Drink'/>
    </div>
  </div>
  );
}

ReactDOM.render(
  <App entries={entries}/>,
  document.getElementById('root')
);