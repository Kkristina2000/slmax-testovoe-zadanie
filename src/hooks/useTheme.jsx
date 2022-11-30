import { useContext } from 'react'
import { ThemeContext } from '../providers/ThemeProvider'

export const useTheme = () => {
	const value = useContext(ThemeContext)
	return value
}
