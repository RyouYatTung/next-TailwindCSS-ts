"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";
import { useState } from "react";
import { error, log } from "console";
import Modal from "./Modal";
import Heading from "../nav/Heading";
import Input from "../inputs/Input";


const RegisterModal = () => {
  const RegisterModal = useRegisterModal();
  const [isLoading, setIsloading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        RegisterModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const bodyContent =(
    <div className="flex flex-col gap-4">
      <Heading title="Welcome" subtitle="Create an account" />
      <Input id="email" label="Email" disable={isLoading} register={register} errors={errors} required  />
      <Input id="name" label="Name" disable={isLoading} register={register} errors={errors} required  />
      <Input id="password" label="Password" type="password" disable={isLoading} register={register} errors={errors} required  />
    </div>
  )

  return <Modal disabled={isLoading} isOpen={RegisterModal.isOpen} title="Regiser" actionLabel="Continue" onClose={RegisterModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} />;
};

export default RegisterModal;
