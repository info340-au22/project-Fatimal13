import Checkbox from "./Checkbox";
import data from "./data.json";
import ProductsList from "./ProductsList.js";
import React, {Component} from "react"; 

/*
export const IslandContext = createContext();
*/

export default class Filter extends Component {
  state = {
    products: data.productsList,
    categories: {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
      eighth: false
    }
  };

  handleChange = e => {
    const { name } = e.target;

    this.setState(prevState => {
      return {
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name]
        }
      };
    });
  };

  render() {
    const checkedProducts = Object.entries(this.state.categories)
      .filter(island => island[1])
      .map(island => island[0]);
    const filteredProducts = this.state.products.filter(({ island }) =>
      checkedProducts.includes(island)
    );

    return (
      <>
      {/*<IslandContext.Provider value={{handleChange: this.handleChange, state: this.state}}>*/ }
      < div className = "App" >
        <label className="sublabel">Sort by</label>
        <h3>Island:</h3>
        <Checkbox
          id="1"
          title="Hawaii"
          name="Hawaii"
          checked={this.state.categories.Hawaii}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="2"
          title="Kahoolawe"
          name="Kahoolawe"
          handleChange={this.handleChange}
          checked={this.state.categories.Kahoolawe}
        />
        <Checkbox
          id="3"
          title="Kauai"
          name="Kauai"
          handleChange={this.handleChange}
          checked={this.state.categories.Kauai}
        />
        <Checkbox
          id="4"
          title="Lanai"
          name="Lanai"
          handleChange={this.handleChange}
          checked={this.state.categories.Lanai}
        />
        <Checkbox
          id="5"
          title="Maui"
          name="Maui"
          handleChange={this.handleChange}
          checked={this.state.categories.Maui}
        />
        <Checkbox
          id="6"
          title="Molokai"
          name="Molokai"
          handleChange={this.handleChange}
          checked={this.state.categories.Molokai}
        />
        <Checkbox
          id="7"
          title="Niihau"
          name="Niihau"
          handleChange={this.handleChange}
          checked={this.state.categories.Niihau}
        />
        <Checkbox
          id="8"
          title="Oahu"
          name="Oahu"
          handleChange={this.handleChange}
          checked={this.state.categories.Oahu}
        />
        <ProductsList
          products={
            filteredProducts.length === 0
              ? this.state.products
              : filteredProducts
          }
        />
      </div >
     </>
    );
  }
}




