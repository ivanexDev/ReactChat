import Mensaje from "../components/Mensaje";
import { sendMessage } from "../API/client";
import { useContext, useState } from "react";
import { DataContext } from "../context/data";
import "./chat.css";
function Chat() {
	const { username } = useContext(DataContext);
	const [message, setMessage] = useState("");

	const handleMessage = (e: any) => {
		setMessage(e.target.value);
	};

	return (
		<div className="chat-container">
			<div className="mensajes">
				<Mensaje />
				<form className="input-container">
					<input type="text" onChange={handleMessage} value={message} />
					<button
						onClick={(e) => {
							e.preventDefault();
							console.log(message);
							sendMessage(username, message);
							setMessage("");
						}}>
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}

export default Chat;
