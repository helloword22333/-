import {v4 as uuid4} from "uuid"
export const getUUID=()=>{
    let uuid_TOKEN=localStorage.getItem("UUIDTOKEN")
    if(!uuid_TOKEN){
        uuid_TOKEN=uuid4()
        localStorage.setItem("UUIDTOKEN",uuid_TOKEN)
    }
    return uuid_TOKEN
}