import React from "react";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стілець сірий',
          img: 'chair-grey.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adpacisang.',
          category: 'chairs', 
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стіл',
          img: 'table.web',
          desc: 'lorem ipsum dolor sit amet, consectetur adpacisang.',
          category: 'chairs', 
          price: '49.99'
        },
        {
          id: 3,
          title: 'Стілець сірий',
          img: 'chair-grey.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adpacisang.',
          category: 'chairs', 
          price: '49.99'
        },
        {
          id: 4,
          title: 'Стілець сірий',
          img: 'chair-grey.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adpacisang.',
          category: 'chairs', 
          price: '49.99'
        },
      ]
    }
  }

  render() {
    return (
    <div className="wrapper">
      <Header/>
      <Items items = {this.state.items}/>
      <Footer/>
    </div>
    )
  }
  
}

export default App;
