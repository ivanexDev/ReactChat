import { ReactNode, createContext, useState } from "react";

type DataProps = {
	children: ReactNode;
};

export const DataContext = createContext<any>({});

export const DataProvider = (props: DataProps) => {
	const [username, setUsername] = useState<string>("");
	const [messages, setMessages] = useState<any>([]);

	return (
		<DataContext.Provider
			value={{ username, setUsername, messages, setMessages }}>
			{props.children}
		</DataContext.Provider>
	);
};
