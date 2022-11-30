import React from 'react'

import NotesListItem from '../notes-list-item/NotesListItem'

import styles from './NotesList.module.scss'

const NotesList = ({ notes, setNotes }) => {
	const deleteNote = id => {
		setNotes(prev => [...prev].filter(note => note._id !== id))
	}

	return (
		<div className={styles.notes}>
			{notes.map(note => (
				<NotesListItem
					key={`exercise ${note._id}`}
					note={note}
					deleteNote={deleteNote}
				/>
			))}
		</div>
	)
}

export default NotesList
