import { useDraggable } from "@dnd-kit/react"

function DragElemement(){
    const {ref:buttonRef}=useDraggable({id:"draggable"})


    return (
        <div style={{display:'grid',placeItems:'center',border:'1px dotted gray',height:"100px",width:"50%"}}>
        <button ref={buttonRef}>drag</button>
        </div>
      )

}
export default DragElemement