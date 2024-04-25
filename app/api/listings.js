import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
const insertListing = () => client.post(endpoint, listingData);

export default {
	getListings,
	insertListing,
};
