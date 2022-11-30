import React from 'react'
import { useTheme } from '../../../hooks/useTheme'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	const { isDark } = useTheme()
	return <div className={isDark ? styles.dark : styles.light}>{children}</div>
}

export default Layout
