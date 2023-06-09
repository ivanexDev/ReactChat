import { useEffect, useState, useContext } from "react";
import { supabase } from "../API/client";
import { DataContext } from "../context/data";

function Mensaje() {
	const { username } = useContext(DataContext);

	const [messages, setMessages] = useState<any>([]);

	useEffect(() => {
		console.log(messages);
	}, [messages]);

	const chat = supabase
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

	console.log(chat);
	return (
		<>
			{messages.map((message: any) => {
				const izqOder = message.username === username ? "end" : "";

				return (
					<div className="chat-text" style={{ alignSelf: `${izqOder}` }}>
						<span>{message.username}: </span> {message.message}
					</div>
				);
			})}
		</>
	);
}

export default Mensaje;
