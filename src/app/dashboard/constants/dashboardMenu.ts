import type { MenuItem } from '@/core/models/menu.model';

export const dashboardMenu: MenuItem[] = [
	{
		group: 'Electronics',
		separator: false,
		items: [
			{
				icon: 'heroChartPie',
				label: 'Dashboard',
				route: '/dashboard',
				children: [
					{ label: 'Products', route: '/dashboard/products' },
					{ label: 'Dashboard', route: '/dashboard/' },
					{ label: 'NFT', route: '/dashboard/nft' },
					{ label: 'Podcast', route: '/dashboard/podcast' },
				],
			},
			{
				icon: 'heroLockClosed',
				label: 'Auth',
				route: '/auth',
				children: [
					{ label: 'Sign up', route: '/auth/sign-up' },
					{ label: 'Sign in', route: '/auth/sign-in' },
					{ label: 'Forgot Password', route: '/auth/forgot-password' },
					{ label: 'New Password', route: '/auth/new-password' },
					{ label: 'Two Steps', route: '/auth/two-steps' },
				],
			},
		],
	},
	{
		group: 'Collaboration',
		separator: true,
		items: [
			{
				icon: 'heroArrowDownTray',
				label: 'Download',
				route: '/dashboard/download',
			},
			{
				icon: 'heroGift',
				label: 'Gift Card',
				route: '/dashboard/gift',
			},
			{
				icon: 'heroUsers',
				label: 'Users',
				route: '/dashboard/users',
			},
		],
	},
	{
		group: 'Config',
		separator: false,
		items: [
			{
				icon: 'heroCog',
				label: 'Settings',
				route: '/dashboard/settings',
			},
			{
				icon: 'heroBell',
				label: 'Notifications',
				route: '/dashboard/gift',
			},
			{
				icon: 'heroFolder',
				label: 'Folders',
				route: '/dashboard/folders',
				children: [
					{ label: 'Current Files', route: '/dashboard/folders/current-files' },
					{ label: 'Downloads', route: '/dashboard/folders/download' },
					{ label: 'Trash', route: '/dashboard/folders/trash' },
				],
			},
		],
	},
];
