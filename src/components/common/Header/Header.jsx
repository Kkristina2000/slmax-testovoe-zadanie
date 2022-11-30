import React from 'react'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header>
			<div className={styles.left}></div>
			<div className={styles.right}></div>
			<h1>Заметки</h1>
		</header>
	)
}

export default Header
