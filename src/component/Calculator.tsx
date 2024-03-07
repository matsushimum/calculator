import {useState} from "react";
import {calculate} from "../logic/calculate";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

export default function Calculator(){
    const [state,setState] = useState<State>({
        current:"0",
        operand:0,
        operator:null,
        isNextClear:false
    })

    const buttonHandler = (code:string)=>{
        const nextState = calculate(code,state)
    }
    return <div>
        <Display />
        <ButtonPanel buttonHandler={buttonHandler} />
    </div>
}