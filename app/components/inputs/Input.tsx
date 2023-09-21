"use client"

import { FieldError, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id:string;
    label:string;
    type?:string;
    disable?:boolean;
    formatPrice?:boolean;
    required?:boolean;
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors;
}

const Input:React.FC<InputProps> = ({id,label,type="text",disable,formatPrice,register,required,errors}) => {
  return (
    <div className="w-full relative">
{
    formatPrice&&(<BiDollar size={24} className="text-neutral-700 absolute top-5 left-2" />)
}

<input type="text" id={id} disabled={disable} {...register(id,{required})} placeholder=" "/>
    </div>
  )
}

export default Input