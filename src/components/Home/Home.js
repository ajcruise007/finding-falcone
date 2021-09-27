import React from "react";
import Tile from "../Tile/Tile";
import "./Home.css";
import Button from "../Button/Button";
import { ApiUrl } from "../../config/ApiUrl";
import ApiHandler from "../../config/ApiHandler";
import { arraysContext } from "../Contexts/arraysContext";

class Home extends React.Component {
  constructor() {
    super();
    this.vehicles = [];
    this.planets = [];
    this.state = {
      vehicles: [],
      planets: [],
     
    };
   
  
  }

  async componentDidMount() {
    this.setState(
      {
        planets: await ApiHandler(ApiUrl.planetsApiUrl),
        vehicles: await ApiHandler(ApiUrl.vehiclesApiUrl),
        
      },

    );
    
  }

  // handleChange = async (e) => {
      
  //    this.setState({vehicles: await ApiHandler(ApiUrl.vehiclesApiUrl)})
  //     // console.log(filteredArray);
      
  // }
 

  render() {
    const { vehicles, planets } = this.state;
    // let isDisabledMap = this.isDisabledMap;
    
    // console.log(isDisabledMap, "34");
   
    return (
      <div className="home">
       
        <arraysContext.Provider value={{ planets, vehicles }}>
          {[0, 1, 2, 3].map((element) => (
            <Tile />
          ))}
        </arraysContext.Provider>

        <Button />
      </div>
    );
  }
}

export default Home;
