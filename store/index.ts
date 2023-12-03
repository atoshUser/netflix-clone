import {create} from "zustand"

interface Store {
name:string
}


export const useStore = create<Store>()((set,get) => ({
name:'Anora'
}))