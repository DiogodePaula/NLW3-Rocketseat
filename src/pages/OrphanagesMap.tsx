import React from 'react';
import { Marker, Popup,Map } from 'react-leaflet';
import L from 'leaflet'
import { Link } from "react-router-dom";
import '../styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css';

import mapMark from '../images/Local.png';
import { FiArrowRight, FiPlus } from "react-icons/fi";


export default () => {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMark} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão
            esperando a sua visita</p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map>
        <Marker position={[-27.2092052,-49.6401092]}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das meninas
            <Link to={`/orphanages/1`}>
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}
