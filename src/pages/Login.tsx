import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/data";

function Login({ handleLogin }: any) {
	const { username, setUsername } = useContext(DataContext);

	function handleUsername(e: any) {
		setUsername(e.target.value);
	}

	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<TextField
				id="outlined-basic"
				label="Username"
				variant="outlined"
				value={username}
				type="text"
				onChange={handleUsername}
			/>
			<Button
				sx={{ marginTop: "20px", width: "100%" }}
				type="submit"
				variant="contained"
				color="primary"
				onClick={(e) => {
					e.preventDefault();
					console.log(username);
					handleLogin(true, username);
				}}>
				Login
			</Button>
		</form>
	);
}

export default Login;
