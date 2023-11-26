export type MenuItem = {
	group: string;
	route?: string | null;
	separator?: boolean;
	selected?: boolean;
	active?: boolean;
	expanded?: boolean;
	items: Array<SubMenuItem>;
};

export type SubMenuItem = {
	icon?: string;
	label?: string;
	route?: string | null;
	expanded?: boolean;
	active?: boolean;
	children?: Array<SubMenuItem>;
};
