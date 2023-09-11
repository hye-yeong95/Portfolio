"use client";

import styles from "../../../../styles/fonts.module.css";
import title from "../../../../public/title.png";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import company from "../../../../public/company.png";
import { useState } from "react";
import page from "../../../../public/company/1.jpg";
import page2 from "../../../../public/company/2.jpg";
import page3 from "../../../../public/company/3.jpg";
import page4 from "../../../../public/company/4.jpg";

export default function Diary() {
  const pagesImg = [
    { image: page, description: "Kit page" },
    { image: page2, description: "Crew page" },
    { image: page3, description: "Home" },
    { image: page4, description: "Bebe Family Page" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const Btn = (e) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < pagesImg.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={`flex flex-col items-center text-center ${styles.font2} `}>
      <div className="relative flex justify-center items-center">
        <Image src={title} alt="title" className="w-[500px] xl:w-[650px]" />
        <h1
          className={`absolute text-3xl text-white md:text-5xl ${styles.font1}`}
        >
          Bebe Company
        </h1>
      </div>

      <div className="md:w-[500px] px-4 text-center text-gray-700">
        <Image
          src={company}
          alt="company"
          className="md:w-[500px] border-2 border-blue-400 rounded-lg "
        />
        <p className="py-3">기간: 2022년 12월 ~ 현재</p>
      </div>

      <h2 className="text-2xl md:text-3xl py-4 text-blue-500 ">Skills</h2>
      <p className="text-base md:text-xl leading-relaxed md:leading-loose mb-6">
        HTML / Javascript / React / tailwind-css
      </p>
      <h2 className="text-2xl md:text-3xl py-4 text-blue-500">역할</h2>
      <p className="text-base md:text-xl leading-relaxed md:leading-loose mb-6">
        총 2명이 진행 (디자이너, 프론트엔드 개발자)
        <br />
        콘텐츠 기획 (기여도 50%)
        <br />
        프론트엔드 개발 (기여도 100%)
      </p>

      <h2 className="text-2xl md:text-3xl py-6 text-blue-500">
        페이지 구성 & 미리보기
      </h2>
      <div className="md:w-[500px] md:h-[300px] px-2">
        <Image
          src={pagesImg[currentImageIndex].image}
          alt={pagesImg[currentImageIndex].description}
          className="md:w-[500px] border-2 border-gray-800 rounded-lg "
        />
      </div>
      <p className="my-1 md:my-4 text-lg">
        {pagesImg[currentImageIndex].description}
      </p>
      <button onClick={Btn} className="mb-10 hover:text-blue-500">
        👉🏻 사진 넘기기
      </button>

      <h2 className="text-2xl md:text-3xl py-4 text-blue-500 ">주된 기능</h2>
      <p className="text-base md:text-xl  leading-relaxed md:leading-loose mb-10">
        ✅ 동영상 콘텐츠 제공
        <br /> ✅ 직관적인 아이콘 디자인과 리스트
        <br /> ✅ 슬라이드 이미지
      </p>
      <div className="hover:text-blue-500 mt-5 ">
        <Link href="https://www.mybebe.net/">
          👉🏻 베베 컴퍼니 사이트 보러가기{" "}
        </Link>
      </div>
      <div className="flex justify-center items-center text-base md:text-xl gap-2 hover:text-gray-600 mt-2">
        <AiFillGithub />
        <Link href="https://github.com/hye-yeong95/bebe">GitHub account</Link>
      </div>
    </div>
  );
}
