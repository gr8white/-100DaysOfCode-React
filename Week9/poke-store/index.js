import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Header from './components/Header';
import TypeList from './components/TypeList';
import ListEmpty from './components/ListEmpty';
import Cart from './components/Cart';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      pokemons: props.pokemons,
      selectedType: props.types[0],
      cartItems: [],
      isCartOpen: false,
    };
    this.selectType = this.selectType.bind(this);
    this.onChangeFilterInput = this.onChangeFilterInput.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
  }

  onChangeFilterInput(e) {
    const { pokemons } = this.state;
    const keyword = e.target.value.toLowerCase();

    this.setState({
      keyword
    });
  }

  toggleCart(e, shouldOpen) {
    this.setState({
      isCartOpen: shouldOpen
    });
  }

  addItemToCart(e, item) {
    const cartItems = this.state.cartItems.slice();

    const doesItemExistInCart = cartItems.filter(cartItem => item.id === cartItem.id).length > 0; 

    if (doesItemExistInCart === false) {
      cartItems.push(item);

      this.setState({
        cartItems
      });
    }
  }

  removeItemFromCart(e, item) {
    let cartItems = this.state.cartItems.slice();

    cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);

    this.setState({
      cartItems
    });
  }

  selectType(e, selectedType) {
    let { pokemons } = this.state;
    
    this.setState({
      selectedType
    });
  }

  render() {
    const { isCartOpen, cartItems, selectedType, keyword } = this.state;
    const { types } = this.props;

    const filteredPokemons = pokemons.filter((pokemon) => {
      const name = pokemon.name.toLowerCase();
      const type = pokemon.type.toLowerCase();

      return name.indexOf(keyword) > -1 && type.indexOf(selectedType.value) > -1; 
    });

    return (
      <div className="wrapper">
          <Header toggleCart={this.toggleCart} cartItems={cartItems}/>

          <div className="filterInput">
              <input onChange={this.onChangeFilterInput} type="text" value={keyword} placeholder="Gotta Catch'em all" />
          </div>

          <TypeList types={types} selectedType={selectedType} selectType={this.selectType} />

          { filteredPokemons.length > 0 ? (
              <List pokemons={filteredPokemons} cartItems={cartItems} addItemToCart={this.addItemToCart} />
          ) : false }

          { filteredPokemons.length === 0 ? (
              <ListEmpty />
          ) : false }

          <Cart
            cartItems={cartItems}
            isCartOpen={isCartOpen}
            toggleCart={this.toggleCart}
            removeItemFromCart={this.removeItemFromCart}
          />
      </div>
  );
  }
}

const pokemons =  [
  {
    id: 1,
    name: 'Abra',
    type: 'psychic',
    image: 'img/abra.svg',
  },
  {
    id: 2,
    name: 'Bellsprout',
    type: 'grass',
    image: 'img/bellsprout.svg',
  },
  {
    id: 3,
    name: 'Bullbasaur',
    type: 'grass',
    image: 'img/bullbasaur.svg',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    image: 'img/charmander.svg',
  },
  {
    id: 5,
    name: 'Eevee',
    type: 'normal',
    image: 'img/eevee.svg',
  },
  {
    id: 6,
    name: 'Squirtle',
    type: 'water',
    image: 'img/squirtle.svg',
  },
  {
    id: 7,
    name: 'Jigglypuff',
    type: 'fairy',
    image: 'img/jigglypuff.svg',
  },
  {
    id: 8,
    name: 'Pikachu',
    type: 'electric',
    image: 'img/pikachu-2.svg',
  },
  {
    id: 9,
    name: 'Meowth',
    type: 'normal',
    image: 'img/meowth.svg',
  },
  {
    id: 10,
    name: 'Psyduck',
    type: 'psychic,water',
    image: 'img/psyduck.svg',
  },
  {
    id: 11,
    name: 'Snorlax',
    type: 'normal',
    image: 'img/snorlax.svg',
  },
  {
    id: 12,
    name: 'Venonat',
    type: 'bug,poison',
    image: 'img/venonat.svg',
  },
  {
    id: 13,
    name: 'Pidgey',
    type: 'flying',
    image: 'img/pidgey.svg',
  },
  {
    id: 14,
    name: 'Rattata',
    type: 'normal',
    image: 'img/rattata.svg',
  },
  {
    id: 15,
    name: 'Mankey',
    type: 'fight',
    image: 'img/mankey.svg',
  },
  {
    id: 16,
    name: 'Dratini',
    type: 'water',
    image: 'img/dratini.svg',
  },
]

const types = [
  {
      name: 'any',
      value: '',
  },
  {
      name: 'normal',
      value: 'normal',
  },
  {
      name: 'electric',
      value: 'electric',
  },
  {
      name: 'fire',
      value: 'fire',
  },
  {
      name: 'water',
      value: 'water',
  },
  {
      name: 'grass',
      value: 'grass',
  },
  {
      name: 'bug',
      value: 'bug',
  },
  {
      name: 'fight',
      value: 'fight',
  },
  {
      name: 'psychic',
      value: 'psychic',
  },
  {
      name: 'fairy',
      value: 'fairy',
  },
  {
      name: 'flying',
      value: 'flying',
  }
];

ReactDOM.render(
    <App pokemons={pokemons} types={types} />,
    document.getElementById('root')
);