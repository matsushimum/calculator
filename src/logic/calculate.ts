export default function calculate(button:string,state:State):State{
    
}

export interface State{
    current:string;
    operand:number;
    operator:string | null;
    isNextClear:boolean;
}