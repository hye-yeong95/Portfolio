import Image from "next/image";
import company from "../../../public/company.png";
import mall from "../../../public/mall.jpg";
import diary from "../../../public/diary.png";
import portfolio from "../../../public/portfolio.jpg";
import Link from "next/link";
import styles from "../../../styles/fonts.module.css";

export default function Projects() {
  return (
    <div className="text-base">
      <p
        className={`${styles.font2} md:text-xl leading-loose md:leading-loose mb-10 md:mb-16`}
      >
        ✅ 기획과 프론트엔드 개발을 맡아 웹사이트를 구현
        <br />
        ✅ 디자이너와 피그마를 활용하여 디자인 컨셉을 구체화
        <br />✅ 백엔드 개발자와 포스트맨을 활용하여 API 연동 작업을 수행
      </p>
      <h1 className={`text-2xl md:text-3xl ${styles.font1} `}>Team Member</h1>
      <div
        className={`${styles.font2} md:text-xl md:leading-loose my-8 md:mb-12`}
      >
        <p>Designer : Kim seo yeong 👧🏻</p>
        <p>Frontend Developer : Kim hye yeong 👩🏻</p>
        <p>Backend Developer : Jo hyun duk 🧑🏻‍🦱</p>
      </div>
      <div className="flex flex-col items-center">
        {renderSection(
          "Bebe Company",
          company,
          "베베계열 브랜드와 회사 크루들의 종합적인 정보를 제공하는 웹사이트입니다.",
          "적응형 웹",
          "HTML, JavaScript, React, tailwind Css",
          "/projects/company"
        )}
        {renderSection(
          "Bebe Mall",
          mall,
          "아기를 중심으로 한 쇼핑몰 웹사이트입니다.",
          "반응형 웹 (test계정 : test@email.com/password)",
          "React, Redux toolkit, tailwind Css, Typescript",
          "/projects/mall"
        )}
        {renderSection(
          "Bebe Diary",
          diary,
          "부모와 아이의 출산, 육아의 일상을 기록하는 웹사이트입니다.",
          "적응형 웹 (test계정 : test@email.com/password) ",
          "React, Redux-toolkit, tailwind Css, styled-component, SWR ",
          "/projects/diary"
        )}
        {renderSection(
          "Portfolio",
          portfolio,
          "김혜영 포트폴리오 사이트입니다.",
          "반응형 웹 ",
          "Next.js, tailwind Css",
          "/portfolio"
        )}
      </div>
    </div>
  );
}

function renderSection(
  titleText,
  imageSrc,
  description,
  web,
  skills,
  detailPagePath
) {
  return (
    <div
      className={`flex flex-col items-center my-5 ${styles.font2} text-base md:text-xl`}
    >
      <h1 className={`text-2xl md:text-3xl ${styles.font1} text-orange-300 `}>
        {titleText}
      </h1>
      <Link href={detailPagePath}>
        <Image
          src={imageSrc}
          alt="image"
          className="md:w-[500px] my-6 border-2 border-orange-300 rounded-lg hover:scale-105 "
        />
      </Link>
      <div className="text-center md:my-4">
        <p className="text-lg md:text-2xl text-gray-700">{description}</p>
        <p className="text-base my-4">{web}</p>
        <p className="">✅ 사용 기술 스택</p>
        <p className="mb-5 py-2">{skills}</p>
      </div>
    </div>
  );
}
