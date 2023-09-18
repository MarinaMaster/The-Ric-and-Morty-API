import React,{useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "../component/Filters/Filters";
import Cards from "../component/Cards/Cards";

export const Home = () => {
	
	const [pageNumber, setPageNumber] = useState(1);
	const [fetchedData, updateFetchedData]=useState([]);
	const {info,results} = fetchedData;
	
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((res)=>res.json());
			updateFetchedData(data);
	})();
	}, [api]);

	return (
	<div className="App">
		<h1 className="text-center ubuntu my-4">
		Rick & Morty <span className="text-primary">WiKi</span></h1>

		<div className="container">
			<div className="row">
				<div className="col-3"><Filters/></div>
				<div className="col-8">
				<div className="row">
					<Cards results={results}/>
					
				</div>
				</div>
			</div>
		</div>
	</div> )
};
