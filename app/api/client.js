import { create } from "apisauce";

const Client = create({
	baseURL: "http://192.168.40.96:9000/api",
});

export default Client;
