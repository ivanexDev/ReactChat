import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import Mensaje from "../components/Mensaje";
import { DataContext } from "../context/data";
import "./chat.css";
import { sendMessage } from "../API/client";

function Chat() {
	const { username } = useContext(DataContext);
	const [newmessage, setNewmessage] = useState("");

	const handleMessage = (e: any) => {
		setNewmessage(e.target.value);
	};

	const handleNewmessage = () => {
		if (newmessage != "") {
			sendMessage(username, newmessage);
			setNewmessage("");
		}
		return;
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					width: "90vw",
					height: "100vh",
				}}>
				<Mensaje />
				<form
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						marginBottom: "20px",
					}}>
					<TextField
						sx={{ width: "100%" }}
						type="text"
						onChange={(e) => {
							handleMessage(e);
						}}
						value={newmessage}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						onClick={(e) => {
							e.preventDefault();
							console.log(newmessage);
							handleNewmessage();
						}}>
						Enviar
					</Button>
				</form>
			</div>
		</>
	);
}

export default Chat;
