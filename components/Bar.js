import { useRouter } from "next/router"
import data from "../pages/api/recruit.json"

const time = ["수18시", "수18시30분","목18시","목18시30분","목19시","금18시","금18시30분","금19시"
]
export default function Bar(){
    const members = data.sort(function(a,b){
        return b.name - a.name
    })
    console.log(members)
    const router = useRouter();
    const onClick = (id) => {
        router.push(`/new/${id}`)
    }
    
    return(<div className="grid grid-cols-8 justify-items-center text-center">
        {time.map((t,i)=><div key = {i}>
            <span className="font-bold">{t}</span>
            {members.map((m,i)=><div onClick={()=>onClick(m.id)} key = {i} className="hover:font-extrabold">
                {m.면접시간 === t ?m.name :null}
                </div>)}
        </div>)}

    </div>)
}