import { useState } from 'react'
import nextId from 'react-id-generator'

import Header from '../../common/Header/Header'
import NotesList from './notes-list/NotesList'
import CreateNote from './create-note/CreateNote'

import { useTheme } from '../../../hooks/useTheme'

import styles from './Notes.module.scss'

const data = [
	{
		_id: nextId(),
		title: 'Заголовок',
		description: 'Краткий текст описание',
		date: new Date(),
		comment: {
			name: '',
			text: '',
			date: ''
		}
	}
]

export const Notes = () => {
	const { isDark, setIsDark } = useTheme()
	const [notes, setNotes] = useState(data)

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>
				<button onClick={() => setIsDark(!isDark)}>change theme</button>
				<NotesList notes={notes} setNotes={setNotes} />
				<CreateNote setNotes={setNotes} />
			</div>
		</div>
	)
}
