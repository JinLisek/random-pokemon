import axios from "axios";
import { Component } from "react";
import RegionsList from "./RegionsList";
import RegionApiData from "./RegionApiData";

interface RegionsState {
  regions: string[];
}

const getRegions = async () => {
  let resp = await axios.get("http://pokeapi.co/api/v2/region/");
  return resp.data.results.map((region: RegionApiData) => region.name);
};

class RegionsRoot extends Component {
  state: RegionsState = {
    regions: [],
  };

  componentDidMount = async () => {
    getRegions().then((regions) => this.setState({ regions }));
  };

  render = () => <RegionsList regions={this.state.regions} />;
}

export default RegionsRoot;
