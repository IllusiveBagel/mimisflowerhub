import { NAV_LINKS, type NAV_LINKS_ITEM } from '../../constants/Navigation';
import styles from './Navigation.module.css';

const Navigation = () => {
	let leftMenu: NAV_LINKS_ITEM[] = [];
	let rightMenu: NAV_LINKS_ITEM[] = [];

	NAV_LINKS.map((navLink) => {
		if (navLink.side === 'left') {
			leftMenu.push(navLink)
		}
		else {
			rightMenu.push(navLink)
		}
	});

	return (
		<div className={styles.navBar}>
			<div className={styles.menu}>
				{leftMenu.map((menuItem) => {
					return <a href={menuItem.url}>{menuItem.title}</a>
				})}
			</div>
			<div className={styles.heading}>
				<h1 className={styles.headingTop}>Mimi's</h1>
				<h1 className={styles.headingBottom}>Flower hub</h1>
			</div>
			<div className={styles.menu}>
				{rightMenu.map((menuItem) => {
					return <a href={menuItem.url}>{menuItem.title}</a>
				})}
			</div>
		</div>
	);
}

export default Navigation;