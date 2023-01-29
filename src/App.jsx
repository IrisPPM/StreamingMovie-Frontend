import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Form, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";


function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "http://localhost:3000/",
	});

	return (
		<Router>
			<ApolloProvider client={client}>

				<Navbar />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route  index element={<Login />} />
					
				
				</Routes>
				

			</ApolloProvider>
		</Router>
	);
}

export default App;
