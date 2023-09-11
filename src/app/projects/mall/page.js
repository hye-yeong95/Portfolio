"use client";

import Image from "next/image";
import home from "../../../../public/mall/home.jpg";
import title from "../../../../public/title.png";
import styles from "../../../../styles/fonts.module.css";
import Link from "next/link";
import { useState } from "react";
import page from "../../../../public/mall/detail.jpg";
import page1 from "../../../../public/mall/edit.jpg";
import page2 from "../../../../public/mall/home.jpg";
import page3 from "../../../../public/mall/join.jpg";
import page4 from "../../../../public/mall/login.jpg";
import page5 from "../../../../public/mall/cart.jpg";
import page6 from "../../../../public/mall/new.jpg";
import page7 from "../../../../public/mall/profile.jpg";
import page8 from "../../../../public/mall/products.jpg";

import { AiFillGithub } from "react-icons/ai";

export default function Mall() {
  const pagesImg = [
    { image: page, description: "Product Detail Page" },
    { image: page1, description: "Edit Page" },
    { image: page2, description: "Home Page" },
    { image: page3, description: "Join Page" },
    { image: page4, description: "Login Page" },
    { image: page5, description: "Cart Page" },
    { image: page6, description: "New Product Page" },
    { image: page7, description: "Profile Page" },
    { image: page8, description: "All Products Page" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const Btn = (e) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < pagesImg.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={`flex flex-col  items-center text-center  ${styles.font2}`}>
      <div className="relative flex justify-center items-center">
        <Image src={title} alt="title" className="w-[500px] xl:w-[650px]" />
        <h1
          className={`absolute text-3xl text-white md:text-5xl ${styles.font1}`}
        >
          Bebe Mall
        </h1>
      </div>

      <div className="md:w-[500px] px-4 text-center  text-gray-700">
        <Image
          src={home}
          alt="home"
          className="md:w-[500px] border-2 border-blue-300 rounded-lg "
        />
        <p className="py-3">기간: 2023년 3월 ~ 현재 </p>
      </div>
      <h2 className="text-2xl md:text-3xl py-4 text-blue-500 ">Skills</h2>
      <p className="text-base md:text-xl leading-relaxed md:leading-loose mb-6">
        redux-toolkit / AWS / Typescript / React / tailwind-css
      </p>
      <h2 className="text-2xl md:text-3xl py-4 text-blue-500">역할</h2>
      <p className="text-base md:text-xl leading-relaxed md:leading-loose mb-6">
        총 2명이 진행 (프론트엔드 개발자, 백엔드 개발자)
        <br />
        콘텐츠 기획 (기여도 100%)
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
      <h2 className="text-2xl md:text-3xl py-4 text-blue-500 ">
        중요하게 생각하는 기능 구현
      </h2>
      <p className="text-base md:text-xl  leading-relaxed md:leading-loose mb-10">
        ✅ Redux-toolkit으로 상태관리
        <br /> ✅ Axios instance 사용
        <br /> ✅ react-hook-form을 사용하여 유효성 검사
        <br /> ✅ 이미지 Lazy loading해서 웹 사이트 로딩 시간 감소 시키기
        <br /> ✅ tailwind css 적용 (반응형)
      </p>
      <div className="hover:text-blue-500 mt-5 ">
        <Link href="https://mall.mybebe.net/">👉🏻 베베 몰 사이트 보러가기 </Link>
      </div>
      <div className="flex justify-center items-center text-base md:text-xl gap-2 hover:text-gray-600 mt-2">
        <AiFillGithub />
        <Link href="https://github.com/hye-yeong95/bebe-mall">
          GitHub account
        </Link>
      </div>
    </div>
  );
}
