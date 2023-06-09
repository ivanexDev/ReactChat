import { createClient } from "@supabase/supabase-js";

const supabaserURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaserURL, supabaseAnonKey);

export let dataMessages = null;

//Enviar mensaje

export async function sendMessage(name: string, mensaje: string) {
	try {
		const { data: chat, error } = await supabase
			.from("chat")
			.insert([
				{
					username: name,
					message: mensaje,
				},
			])
			.single();
		console.log(chat);
		if (error) throw error;
	} catch (error: any) {
		alert(error.message);
	}
}

export async function getMessage() {
	try {
		let { data: chat, error } = await supabase
			.from("chat")
			.select("username, message");
		console.log(chat);
		if (error) throw error;
	} catch (error: any) {
		alert(error.message);
	}
}
