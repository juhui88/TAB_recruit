import { useRouter } from "next/router"
import data from "../pages/api/recruit.json"

export default function Bar(){
    const members = data.sort(function(a,b){
        return b.name - a.name
    })
    console.log(members)
    const router = useRouter();
    const onClick = (id) => {
        router.push(`/new/${id}`)
    }
    
    return(<div className="grid grid-cols-10">
        {members.map(i=>
            <div key={i.id} onClick={()=>onClick(i.id)} className="hover:font-extrabold">{i.name}</div>
        )}
    </div>)
}