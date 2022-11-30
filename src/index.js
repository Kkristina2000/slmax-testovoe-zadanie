import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { ThemeProvider } from './providers/ThemeProvider'
import Layout from './components/common/Layout/Layout'
import { Notes } from './components/screens/Notes/Notes'

import './scss/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<Layout>
				<Notes />
			</Layout>
		</ThemeProvider>
	</React.StrictMode>
)

reportWebVitals()
