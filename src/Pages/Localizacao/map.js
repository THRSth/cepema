import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

export class MapContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          stores: [
            { latitude: 0, longitude: 0, local: "t" },
            { latitude: -23.886444, longitude: -46.437167, local: "Cepema" },
        ]
            
        }
      }

      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          />
        })
      }

    render() {
      return (
  
        <Map
          google={this.props.google}
          zoom={7}
          initialCenter={{ lat: -23.886444, lng: -46.437167 }}
        >
                    {this.displayMarkers()}

        </Map>
  
      );
    }
  }
