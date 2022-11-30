import { useState } from 'react'
import Comment from '../comment/Comment'
import button from '../../../../images/button.svg'

import styles from './NotesListItem.module.scss'

const NotesListItem = ({ note, deleteNote }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [isSwipe, setIsSwipe] = useState(false)
	const [isDelete, setIsDelete] = useState(false)
	const [time, setTime] = useState(5)
	const id = note._id

	const handleClickDelete = () => {
		setIsDelete(true)
		const interval = setInterval(() => {
			setTime(prev => (prev >= 1 ? prev - 1 : deleteNote(id)))
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}

	return (
		<>
			<div className={styles.note} onClick={() => setIsSwipe(!isSwipe)}>
				<h1>{note.title}</h1>
				<p>{note.description.substr(0, 20)}</p>
				{isSwipe ? (
					<button onClick={handleClickDelete} className={styles.delete}>
						Удалить
					</button>
				) : isDelete ? (
					<button onClick={() => setIsDelete(false)}>{time}</button>
				) : (
					isSwipe === false &&
					isDelete === false && (
						<button onClick={() => setIsOpen(!isOpen)}>
							<img src={button} alt='Open note'></img>
						</button>
					)
				)}
			</div>
			{isOpen && (
				<>
					<div>
						<p>{`${note.date.getDate()}.${note.date.getMonth()}.${note.date.getFullYear()}`}</p>
						<div>{note.description}</div>
					</div>
					<Comment note={note} />
				</>
			)}
		</>
	)
}

export default NotesListItem
