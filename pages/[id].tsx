// pages/live-collaboration/[roomId].tsx
import React from 'react';
import { useRouter } from 'next/router';
import MyCollaborativeCanvas from '../Components/MyCollaborativeCanvas';

const LiveCollaboration = () => {
  const router = useRouter();
  const { roomId } = router.query; // Access roomId from the query object

  // Add any other state or props you need for MyCollaborativeCanvas
  return <MyCollaborativeCanvas roomId={roomId as string} />; // Pass roomId as a prop
};

export default LiveCollaboration;