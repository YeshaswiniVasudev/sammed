'use client'

import React from 'react'
import ExcalidrawAI from '@/app/ExcelliDrawAI';
import { useRouter } from "next/navigation";
import { Button } from '@/Components/ui/button';

const AIGenerationPage = () => {
    const router = useRouter();

   
    const BackHandleClick = () => {
        router.push('/');
    }
  return (
    <div>
        <Button onClick={BackHandleClick} style={{position: 'fixed', top: '200px', left: '10px', zIndex: 9999}}>Home</Button>
<ExcalidrawAI />
    </div>
      
  )
}

export default AIGenerationPage