// RoomHandler.tsx
'use client'
import { useState } from 'react';
import MyCollaborativeCanvas from "@/app/MyCollaborativeCanvas";
import { useRouter } from "next/navigation";
import { Button } from '@/Components/ui/button';
export default function RoomHandler() {
  const [showForm, setShowForm] = useState(false);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  
  const handleButtonClick = () => {
    setShowForm(true);
    
  };

  const BackHandleClick = () => {
    // setShowForm(true);
    setRoomId(null);
    setInputValue('');
   
  }

  const HomeHandleClick = () => {
    // setShowForm(true);
    setRoomId(null);
    setInputValue('');
    router.push('/');
  }

  const handleJoinRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const roomId = (e.target as any).elements.roomId.value;
    setRoomId(roomId);
    setShowForm(false);
  };

  const handleCreateRoom = () => {
    const roomId = Math.random().toString(36).substring(7);
    setRoomId(roomId);
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Live Collaboration</button>
      <Button onClick={HomeHandleClick} style={{position: 'fixed', top: '300px', left: '10px', zIndex: 9999}}>Home</Button>
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
      {roomId && <div>
        <Button onClick={BackHandleClick} style={{position: 'fixed', top: '200px', left: '10px', zIndex: 9999}}>Back</Button>
      <Button onClick={HomeHandleClick} style={{position: 'fixed', top: '300px', left: '10px', zIndex: 9999}}>Home</Button>

      <MyCollaborativeCanvas roomId={roomId} /></div>}
    </div>
  );
}