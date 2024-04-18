'use client'
import React from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import RoomHandler from '@/Components/RoomHandler';
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { Button } from "@/Components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"
 
// const formSchema = z.object({
//   room_ID: z.string().min(2).max(50),
// })



const LiveCollaborationPage = () => {
    // const router = useRouter();

    // var roomId : string = "";

    // const form = useForm<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //         room_ID: "",
    //     },
    //   })

//      function generateRandomString(length: number): string {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     const charactersLength = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// function handleCreateRoom() {
//     roomId = generateRandomString(7);
//     router.push(`/LiveCollaborationPage/${roomId}`);
    
// }
     
      // 2. Define a submit handler.
      // function onSubmit(values: z.infer<typeof formSchema>) {
      //   // Do something with the form values.
      //   // ✅ This will be type-safe and validated.
      //   roomId = values.room_ID;
      //   router.push(`/LiveCollaborationPage/${roomId}`);
      //   console.log(values)
      // }
  return (
  //   <div><Form {...form}>
  //   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
  //     <FormField
  //       control={form.control}
  //       name="room_ID"
  //       render={({ field }) => (
  //         <FormItem>
  //           <FormLabel>room ID</FormLabel>
  //           <FormControl>
  //             <Input placeholder="Enter the room ID" {...field} />
  //           </FormControl>
  //           <FormMessage />
  //         </FormItem>
  //       )}
  //     />
  //     <Button type="submit" >Join Room</Button>
  //     <Button type="button" onClick={handleCreateRoom}>Create New Room</Button>
  //   </form>
  // </Form></div>

  <RoomHandler/>
  )
}

export default LiveCollaborationPage