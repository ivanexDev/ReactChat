import { useContext, useEffect, useState } from "react";
import { supabase } from "../API/client";
import { DataContext } from "../context/data";

function Mensaje() {
	const { username } = useContext(DataContext);

	const [messages, setMessages] = useState<any>([]);

	useEffect(() => {
		console.log(messages);
	}, [messages]);

	supabase
		.channel("custom-insert-channel")
		.on(
			"postgres_changes",
			{ event: "INSERT", schema: "public", table: "chat" },
			(payload) => {
				let mensajesNuevos = {
					username: payload.new.username,
					message: payload.new.message,
				};
				setMessages([...messages, mensajesNuevos]);
			}
		)
		.subscribe();

	return (
		<>
			{messages.map((message: any) => {
				const izqOder = message.username === username ? "end" : "";
				const btnBgColor =
					message.username === username ? "#1976d2" : "#7a7a7a";

				return (
					<div
						key={crypto.randomUUID()}
						className="chat-text"
						style={{
							width: "fit-content",
							backgroundColor: `${btnBgColor}`,
							fontSize: "1.2rem",
							padding: "15px",
							margin: "10px",
							color: "white",
							borderRadius: "25px",
							alignSelf: `${izqOder}`,
						}}>
						<span>{message.username}: </span>

						{message.message}
					</div>
				);
			})}
		</>
	);
}

export default Mensaje;
