import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "./basicmap.css";
import { Icon } from "leaflet";

function MapsBasic() {
	const markers = [
		{
			geocode: [40.78715373330886, -77.85929992811074],
			popUp: "Johnson's Pantry at Community Field",
		},
		{
			geocode: [40.788683510377545, -77.87180579989595],
			popUp: "West College Community Pantry",
		},
		{
			geocode: [40.79420502594736, -77.87442473864165],
			popUp: "Community Pantry @ West Park Avenue",
		},
		{
			geocode: [40.778885486477115, -77.87821947904942],
			popUp: "Community Pantry @ Songbird Sanctuary Park",
		},
		{
			geocode: [40.7942238186988, -77.85836683553717],
			popUp: "Phi Sigma Sigma Community Pantry",
		},
		{
			geocode: [40.78241761337092, -77.86601682034922],
			popUp: "Community Pantry @ Holmes Foster Park",
		},
		{
			geocode: [40.793012427227964, -77.84156534797567],
			popUp: "Chinese Alliance Church Community Pantry",
		},
		{
			geocode: [40.7865040727099, -77.85407625973409],
			popUp: "Malik Family's Pantry @ Logan Avenue",
		},
		{
			geocode: [40.78138392651917, -77.85777382439016],
			popUp: "State College Area High School Pantry",
		},
	];

	const customIcon = new Icon({
		iconUrl: require("../media/location-pin.svg").default,
		iconSize: [38, 38],
	});

	return (
		<MapContainer center={[40.789315572617845, -77.8685462375501]} zoom={15}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright"
      OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{markers.map((marker) => (
				<Marker position={marker.geocode} icon={customIcon}>
					<Popup>
						<p class="popup">{marker.popUp}</p>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}
export default MapsBasic;
