"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import Heading from "../nav/Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();
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
        toast.error("error");
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const toggle = useCallback(() => {
    LoginModal.onOpen();
    RegisterModal.onClose();
  }, [LoginModal, RegisterModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome" subtitle="Create an account" />
      <Input id="email" label="Email" disable={isLoading} register={register} errors={errors} required />
      <Input id="name" label="Name" disable={isLoading} register={register} errors={errors} required />
      <Input id="password" label="Password" type="password" disable={isLoading} register={register} errors={errors} required />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => {}} />
      <Button outline label="Continue with Github" icon={AiFillGithub} onClick={() => signIn("github")} />

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div className="">Already have an account?</div>
          <div className="text-neutral-800 cursor-pointer hover:underline" onClick={toggle}>
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return <Modal disabled={isLoading} isOpen={RegisterModal.isOpen} title="Regiser" actionLabel="Continue" onClose={RegisterModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent} />;
};

export default RegisterModal;
