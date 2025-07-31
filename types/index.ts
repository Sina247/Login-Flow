export type User = {
	name: {
		first: string;
		last: string;
	};

	email: string;
	phone: string;
	picture: {
		thumbnail: string;
	};
};
