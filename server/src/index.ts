import express from "express";
import ViteExpress from "vite-express";
import config from "../config.json" assert { type: "json" };

const app = express();

app.get("/ping", (_, res) => res.send("pong"));

const server = app.listen(config.server.port, () => {
	if (process.env.NODE_ENV != "production")
		console.log(
			"\x1b[1m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[90m%s\x1b[0m\x1b[1m\x1b[36m%s\x1b[0m\x1b[90m%s\x1b[0m",
			"Server Online",
			" ➜  ",
			"http://localhost:",
			config.server.port,
			"/"
		);
});

ViteExpress.bind(app, server);
