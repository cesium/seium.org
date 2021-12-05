import { Component } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";

class Map extends Component {
    state = {
        viewport: {
            width: '35vw',
            height: '35vh',
            latitude: 41.56223051893658,
            longitude: -8.39774542273983,
            zoom: 15
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/cesinformaticaum/ckwtkrcrc2ypr15nv538kb58z"
                mapboxApiAccessToken="pk.eyJ1IjoiY2VzaW5mb3JtYXRpY2F1bSIsImEiOiJja3d0aGRoc3ExZ2E2Mm9wbTlrbjlucmt1In0.vMxC_EtVdBjkc9-F7HsMCw"
                onViewportChange={(viewport) => this.setState({ viewport })}
                {...this.state.viewport}
            >
                <Marker
                    latitude={41.56223051893658}
                    longitude={-8.39774542273983}
                >
                </Marker >
            </ReactMapGL >
        );
    }
}

export default Map;