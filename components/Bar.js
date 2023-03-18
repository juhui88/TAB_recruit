import { useRouter } from "next/router"
import data from "../pages/api/recruit.json"

export default function Bar(){
    const router = useRouter();
    const onClick = (id) => {
        router.push(`/new/${id}`)
    }
    
    return(<div className="grid grid-cols-10">
        {data.map(i=>
            <div key={i.id} onClick={()=>onClick(i.id)} className="hover:font-extrabold">{i.name}</div>
        )}
    </div>)
}