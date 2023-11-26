export interface NAV_LINKS_ITEM {
	url: string;
	title: string;
	side: string;
}

export const NAV_LINKS = [
	{
		url: '/',
		title: 'Home',
		side: 'left'
	},
	{
		url: '/gallery',
		title: 'Gallery',
		side: 'left'
	},
	{
		url: '/about',
		title: 'About',
		side: 'right'
	},
	{
		url: '/quote',
		title: 'Get A Quote',
		side: 'right'
	}
]