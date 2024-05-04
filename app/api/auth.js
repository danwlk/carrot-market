import Client from "./client";

const login = (email, password) => Client.post("/auth", { email, password });

export default {
	login,
};
