import { useDroppable } from "@dnd-kit/react";

function DropElement({id,children}){
    const {ref}=useDroppable({id})
    return(
        <>
        <div ref={ref} style={{backgroundColor:"red",width: 300, height: 300}}>
        {children}
        </div>
        </>
    )
}
export default DropElement