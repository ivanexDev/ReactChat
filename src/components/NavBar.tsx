import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}></IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						React <ChatBubbleIcon />
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
