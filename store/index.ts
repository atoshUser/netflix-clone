import {create} from "zustand"

interface Store {
account:IAccount | null
}


interface IAccount{
    name:string
    email:string

}

export const useStore = create<Store>()((set,get) => ({
  account:null
}))