import NavBar from "./components/NavBar";
import { DataProvider } from "./context/data";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
	const [isIn, setIsIn] = useState(false);

	// useEffect(() => {
	// 	getMessage();
	// 	updateChat();
	// }, []);

	const handleLogin = (answer: boolean, username: string) => {
		if (username == "") {
			console.log("nombre vacio");
			return;
		}
		console.log(answer, username);
		setIsIn(answer);
	};

	return (
		<>
			<DataProvider>
				<NavBar></NavBar>
				{isIn ? <Chat></Chat> : <Login handleLogin={handleLogin}></Login>}
			</DataProvider>
		</>
	);
}

export default App;
