import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";



export const myThinkState = atom({
    key:"myThinkState",
    default: []
})