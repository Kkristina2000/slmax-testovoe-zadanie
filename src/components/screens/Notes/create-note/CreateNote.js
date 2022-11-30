import { useState } from 'react'
import nextId from 'react-id-generator'

import button from '../../../../images/button.svg'

import styles from './Create.module.scss'

const CreateNote = ({ setNotes }) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const addNote = (title, description) => {
		title === '' && description === ''
			? setNotes(prev => [
					{
						_id: nextId(),
						title: 'Заголовок',
						description: 'Краткий текст описание',
						date: new Date(),
						comment: {
							name: 'Название комментария',
							text: 'Текст комментария',
							date: ''
						}
					},
					...prev
			  ])
			: setNotes(prev => [
					{
						_id: nextId(),
						title,
						description,
						date: new Date(),
						comment: {
							name: 'Название комментария',
							text: 'Текст комментария',
							date: ''
						}
					},
					...prev
			  ])

		setTitle('')
		setDescription('')
	}

	return (
		<div className={styles.add}>
			<input
				type='text'
				placeholder='Название'
				maxLength={25}
				value={title}
				onChange={e => setTitle(e.target.value)}
				className={styles.title}
			/>
			<div>
				<input
					type='text'
					placeholder='Текст описание'
					value={description}
					onChange={e => setDescription(e.target.value)}
					className={styles.description}
				/>
				<button onClick={() => addNote(title, description)}>
					<img src={button} alt='Add Note' />
				</button>
			</div>
		</div>
	)
}

export default CreateNote
