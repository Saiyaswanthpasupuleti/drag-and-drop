import { useState } from "react";
import DragElemement from "./draggable"
import DropElement from "./droppable"
import {DragDropProvider} from '@dnd-kit/react';

function App() {
  const [isDropped, setIsDropped] = useState(false);

  // const handleDragEnd=(event)=>{
  //   if (event.canceled) return;
  //   const {target} = event.operation;
  //   setIsDropped(target?.id === 'droppable');



  // }

  return (
    <>
    <DragDropProvider  onDragEnd={(event) => {
        if (event.canceled) return;

        const {target} = event.operation;
        setIsDropped(target?.id === 'droppable');
      }}>
   {!isDropped && <DragElemement/>}

   <DropElement id="droppable">
    {isDropped && <DropElement/>}
   </DropElement>
   </DragDropProvider>

   </>
  )
}

export default App
