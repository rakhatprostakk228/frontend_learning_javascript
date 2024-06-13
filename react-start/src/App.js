import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Air Jordan 1 Low OG Reverse Mocha',
          img: 'mocha.jpeg',
          desc: 'Brown, light beige, leather, Nike Swoosh logo, Air Jordan Wings logo, rounded toe, lace-up front, logo patch on the tongue, logo insole and rubber sole.',
          category: 'Nike',
          price: '1591'
        },
        {
          id: 2,
          title: "Dunk Low Retro PRM Valentine's Day 2023",
          img: 'valentine.jpg',
          desc: 'Burgundy, cream white, pink, leather, Nike Swoosh logo, embroidered logo on the back, rounded toe, lacing on the front, logo patch on the tongue, logo insole and rubber sole.',
          category: 'Nike',
          price: '111'
        },
        {
          id: 3,
          title: 'Dunk Low Retro Panda',
          img: 'dunk-panda.jpg',
          desc: 'White, Black Leather Rounded Toe Flat Rubber Outsole Lace-up Front Insole with Nike Swoosh Logo.',
          category: 'Nike',
          price: '103'
        },
        {
          id: 4,
          title: "Nike x Travis Scott Air Force 1 Low '07 Utopia Edition",
          img: 'utopia.jpg',
          desc: 'These styles are supplied by a premium sneaker marketplace. Stocking only the most sought-after footwear, they source and curate some of the most hard to find sneakers from around the world.',
          category: 'Nike',
          price: '148'
        },
        {
          id: 5,
          title: 'Air Jordan 1 Low OG Olive',
          img: 'olive.jpg',
          desc: 'Black, white, olive green, calfskin, Nike Swoosh logo, Air Jordan Wings logo, rounded toe, lace-up front, logo patch on the tongue, logo insole and rubber sole.',
          category: 'Nike',
          price: '892'
        },
        {
          id: 6,
          title: 'Adidas Forum 84',
          img: 'forum.jpg',
          desc: 'Grey/white, calfskin, inserts, perforated toe, iconic 3-Stripes logo, logo patch on the tongue, embossed logo on the side, logo on the sole, rounded toe, lacing in front.',
          category: 'Adidas',
          price: '148'
        }
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id == item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]});
  }
}

export default App;
