import { DataContext } from "../context/data";
import { useContext } from "react";
import "./login.css";
function Login({ handleLogin }: any) {
	const { username, setUsername } = useContext(DataContext);

	function handleUsername(e: any) {
		setUsername(e.target.value);
	}

	return (
		<form action="" className="login-container">
			<input
				value={username}
				type="text"
				placeholder="Username"
				onChange={handleUsername}></input>
			<button
				onClick={(e) => {
					e.preventDefault();
					console.log(username);
					handleLogin(true, username);
				}}>
				Entrar
			</button>
		</form>
	);
}

export default Login;
