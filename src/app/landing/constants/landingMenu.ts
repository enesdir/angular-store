import type { MenuItem } from '@/core/models/menu.model';

export const landingMenu: MenuItem[] = [
	{
		group: 'Electronics',
		route: '/products',
		separator: false,
		items: [
			{
				icon: 'heroChartPie',
				label: 'Dashboard',
				route: '/dashboard',
				children: [
					{ label: 'Products', route: '' },
					{ label: 'Dashboard', route: '/dashboard/' },
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
				route: '/download',
			},
			{
				icon: 'heroGift',
				label: 'Gift Card',
				route: '/gift',
			},
			{
				icon: 'heroUsers',
				label: 'Users',
				route: '/users',
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
				route: '/settings',
			},
			{
				icon: 'heroBell',
				label: 'Notifications',
				route: '/gift',
			},
			{
				icon: 'heroFolder',
				label: 'Folders',
				route: '/folders',
				children: [
					{ label: 'Current Files', route: '/folders/current-files' },
					{ label: 'Downloads', route: '/folders/download' },
					{ label: 'Trash', route: '/folders/trash' },
				],
			},
		],
	},
];
