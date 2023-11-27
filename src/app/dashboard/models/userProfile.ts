export interface UserProfileMenu {
	name: string;
	email: string;
	userImage: string;
	links: {
		label: string;
		route: string;
	}[];
}
