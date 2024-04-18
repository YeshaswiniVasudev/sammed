'use client'

import { Tldraw, track, useEditor } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { useYjsStore } from '../hooks/YjsTldrawEditor'
import { useState } from 'react';

interface MyCollaborativeCanvasProps {
  roomId: string;
}

const HOST_URL =
process.env.NODE_ENV === 'development'
		? 'ws://localhost:1234'
		: 'wss://demos.yjs.dev'

export default function MyCollaborativeCanvas({ roomId }: MyCollaborativeCanvasProps) {
	const store = useYjsStore({
		roomId: roomId,
		hostUrl: HOST_URL,
	})

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
    } catch (err) {
      console.error('Failed to copy room ID: ', err);
    }
  };


	return (
<div className="tldraw__editor">
<div style={{ position: 'fixed', top: '100px', left: '10px', zIndex: 9999 }}>
        Room ID: {roomId}<br></br>
        {isCopied ? (
          <span>Copied ✔️</span>
        ) : (
          <button onClick={handleCopy}>Copy</button>
        )}
      </div>
      <Tldraw
        autoFocus
        store={store}
        components={{
          SharePanel: NameEditor,
        }}
      />
    </div>
	)
}

const NameEditor = track(() => {
	const editor = useEditor()

	const { color, name } = editor.user.getUserPreferences()

	return (
		<div style={{ pointerEvents: 'all', display: 'flex' }}>
			<input
				type="color"
				value={color}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						color: e.currentTarget.value,
					})
				}}
			/>
			<input
				value={name}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						name: e.currentTarget.value,
					})
				}}
			/>
		</div>
	)
})