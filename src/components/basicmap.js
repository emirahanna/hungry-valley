import { LitElement, html, css } from "lit";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

export class BasicMap extends LitElement {
	static get tag() {
		return "map-component";
	}

	constructor(props) {
		super(props);
		this.state = {
			lat: 28.63196,
			lng: 77.22054,
			zoom: 16,
		};
	}

	static get styles() {
		return css`
			.leaflet-container {
				width: 100%;
				height: 500px;
			}
		`;
	}

	render() {
		const position = [this.state.lat, this.state.lng];
	return;
	}
}
