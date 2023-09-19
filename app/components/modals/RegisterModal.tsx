"use client"
import axios from "axios";
import {AiFillGithub} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import useRegisterModal from "../hooks/useRegisterModal";
import { useState } from "react";

const RegisterModal = () => {
const RegisterModal = useRegisterModal()
const [isLoading,setIsloading]=useState(false);

const {register,handleSubmit,formState:{
    errors,
}}=useForm<FieldValues>({
    defaultValues:{
        name:"",
        email:"",
        password:""
    }
})

  return (
    <div>RegisterModal</div>
  )
}

export default RegisterModal