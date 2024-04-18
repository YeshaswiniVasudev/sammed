// RoomHandler.tsx
'use client'
import { useState } from 'react';
import MyCollaborativeCanvas from "../Components/MyCollaborativeCanvas";

export default function RoomHandler() {
  const [showForm, setShowForm] = useState(false);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleJoinRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const roomId = (e.target as any).elements.roomId.value;
    setRoomId(roomId);
  };

  const handleCreateRoom = () => {
    const roomId = Math.random().toString(36).substring(7);
    setRoomId(roomId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Live Collaboration</button>
      {showForm && (
        <form onSubmit={handleJoinRoom}>
<input
  type="text"
  name="roomId"
  placeholder="Enter room ID"
  value={inputValue}
  onChange={handleInputChange}
  required
/><br></br>
          <button type="submit">Join Room</button><br></br>
          <button type="button" onClick={handleCreateRoom}>Create New Room</button>
        </form>
      )}
      {roomId && <MyCollaborativeCanvas roomId={roomId} />}
    </div>
  );
}