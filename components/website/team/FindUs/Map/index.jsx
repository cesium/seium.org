import { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      latitude: 41.56223051893658,
      longitude: -8.39774542273983,
      zoom: 15,
    },
  };

  onViewportChange = (viewport) => {
    const { width, height, ...etc } = viewport;
    this.setState({ viewport: etc });
  };

  render() {
    return (
      <ReactMapGL
        width="100%"
        height="300px"
        mapStyle="mapbox://styles/cesinformaticaum/ckwtkrcrc2ypr15nv538kb58z"
        mapboxApiAccessToken="pk.eyJ1IjoiY2VzaW5mb3JtYXRpY2F1bSIsImEiOiJja3d0aGRoc3ExZ2E2Mm9wbTlrbjlucmt1In0.vMxC_EtVdBjkc9-F7HsMCw"
        onViewportChange={(viewport) => {
          this.setState({ viewport });
          console.log("teste");
        }}
        {...this.state.viewport}
      >
        <Marker
          latitude={41.56223051893658}
          longitude={-8.39774542273983}
        ></Marker>
      </ReactMapGL>
    );
  }
}

export default Map;
