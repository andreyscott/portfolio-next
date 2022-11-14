import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import Link from "next/link";
import Maps from "./Map";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:andreyscott301@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
    
      <div className="flex flex-col md:w-2/5 md:mx-3 justify-center items-center md:items-start">

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl md:text-4xl font-semibold text-center break-normal w-96 md:w-auto mx-auto">
          I have got just what you need.{" "}
          <span className="underline block md:inline decoration-[#4ff924]/50">
            Let&apos;s Talk.
          </span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#4ff924] animate-pulse" />
            <p className="text-1xl">{pageInfo?.phoneNumber}</p>
          </div>

          <Link href={`mailto:${pageInfo?.email}`}>
            <div className="flex items-center space-x-5 justify-center cursor-pointer">
              <EnvelopeIcon className="h-7 w-7 text-[#4ff924] animate-pulse" />
              <p className="text-1xl">{pageInfo?.email}</p>
            </div>
          </Link>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#4ff924] animate-pulse" />
            <p className="text-1xl">{pageInfo?.address}</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-[70%] md:w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />

          <button
            type="submit"
            className="bg-[#4ff924] py-3 md:py-4 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
     {/* import maps  */}
      <div className="md:w-3/5 h-auto">
        <Maps />
        </div>
    </div>
  );
}