import Bar from "@/components/Bar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import api from "../api/recruit.json"

export default function NewMember({params}){
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    const data = api[Number(params)-1]
    console.log(data)
    /* const onValid = (think) => {
        setMyThink([...prev, think])
    } */
    return(<div>
        <Bar/>
        <div className="grid mt-10">
            <div className="flex flex-col items-center justify-center">
                <div className="text-3xl ">
                    <span className="">
                        <span className="font-extrabold">{data.name}</span>
                    </span>    
                </div> 
                <div className=" w-3/4">
                    <div className="text-sm grid grid-cols-2 my-8 w-2/3 mx-auto">
                        <div className="grid grid-cols-2"><span>성별 :</span> <span className="font-extrabold">{data.성별}</span> </div>
                        <div className="grid grid-cols-2"><span>학번 :</span> <span className="font-extrabold">{data.학번}</span></div>
                        <div className="grid grid-cols-2"><span>생년월일 :</span><span className="font-extrabold">{data.생년월일}</span></div>
                        <div className="grid grid-cols-2">
                            
                            <span>GitHubId :</span> 
                            <Link href={`https://github.com/${data.githubId}`}>
                            <span className="font-extrabold">
                            {data.githubId}
                            
                            </span>
                            </Link>
                            
                        </div>
                        <div className="grid grid-cols-2"><span>통학?긱사?</span><span className="font-extrabold">{data.통학여부}</span></div>
                        <div className="grid grid-cols-2"><span>신입생?편입생? </span>  <span className="font-extrabold">{data.isFresh}</span></div>
                    </div>
                    <div className="flex flex-col justify-start space-y-5">
                        <div className="grid gap-2">
                            <span>지원 사유 및 동기</span>
                            <span className="font-extrabold ml-5">{data.reason}</span>
                        </div>
                        <div className="grid gap-2">
                            <span>학회에 기대하는 점이나 하고 싶은 활동</span>
                            <span className="font-extrabold ml-5">{data.expect}</span>
                        </div>
                        <div className="grid gap-2">
                            <span>관심있는 코딩분야</span>
                            <span className="font-extrabold ml-5">{data.interest}</span>
                        </div>
                        <div className="grid gap-2">
                            <span>포부</span>
                            <span className="font-extrabold ml-5">{data.aspiration}</span>
                        </div>    
                    </div>
                </div>   
            </div>
            
            
            
        </div> 
    </div>)
}

export async function getServerSideProps({ params : {params} }) {
    return {
      props: { params },
    };
  }