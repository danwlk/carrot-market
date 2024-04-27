import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const insertListing = (listing) => {
	const data = new FormData();

	data.append("title", listing.title);
	data.append("price", listing.price);
	data.append("categoryId", listing.category.value);
	data.append("description", listing.description);
	listing.imageUris.forEach((uri, index) => {
		console.log(uri, index)
		data.append("images", {
			name: 'image' + index,
			type: "image/jpeg",
			uri: uri,
		});
	});
	if (listing.location) {
		data.append("location", JSON.stringify(listing.location));
	}

	client.setHeader("Content-Type", "multipart/form-data");
	return client.post(endpoint, data);
};

export default {
	getListings,
	insertListing,
};
