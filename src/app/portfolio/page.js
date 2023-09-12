"use client";
import portfolio from "../../../public/portfolio.jpg";
import styles from "../../../styles/fonts.module.css";
import title from "../../../public/title.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function Portfolio() {
  return (
    <div className={`flex flex-col items-center text-center ${styles.font2} `}>
      <div className="relative flex justify-center items-center">
        <Image src={title} alt="title" className="w-[500px] xl:w-[650px]" />
        <h1
          className={`absolute text-3xl text-white md:text-5xl ${styles.font1}`}
        >
          Portfolio{" "}
        </h1>
      </div>
      <div className="md:w-[500px] px-4 text-center text-gray-700">
        <Image
          src={portfolio}
          alt="company"
          className="md:w-[500px] border-2 border-blue-400 rounded-lg "
        />
        <p className="py-3">기간: 2023년 6월 ~ 현재</p>
      </div>

      <h2 className="text-2xl md:text-3xl py-4 text-blue-500 ">Skills</h2>
      <p className="text-base md:text-xl leading-relaxed md:leading-loose mb-6">
        Next.js / tailwind Css
      </p>
      <h2 className="text-2xl md:text-3xl py-4 text-blue-500">역할</h2>
      <p className="text-base md:text-xl leading-relaxed md:leading-loose mb-6">
        총 1명이 진행 (프론트엔드 개발자)
        <br />
        프론트엔드 개발 (기여도 100%)
      </p>
      <div className="flex justify-center items-center text-base md:text-xl gap-2 hover:text-gray-600 mt-2">
        <AiFillGithub />
        <Link href="https://github.com/hye-yeong95/Portfolio">
          GitHub account
        </Link>
      </div>
    </div>
  );
}
