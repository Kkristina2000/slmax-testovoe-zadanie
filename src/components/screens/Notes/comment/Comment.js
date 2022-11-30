import React from 'react'

import styles from './Comment.module.scss'

const Comment = ({ note }) => {
	return (
		<div className={styles.comment}>
			<h1>{note.comment['name']}</h1>
			<p>{note.comment['text']}</p>
			<p>{note.comment['date']}</p>
		</div>
	)
}

export default Comment
