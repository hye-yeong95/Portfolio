import Image from "next/image";
import title from "../../../public/title.png";
import company from "../../../public/company.png";
import mall from "../../../public/mall.jpg";
import diary from "../../../public/diary.png";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import styles from "../../../styles/fonts.module.css";

export default function Products() {
  return (
    <div>
      <div className="text-lg md:text-xl text-center my-12">
        <h1 className={`text-3xl md:text-5xl  ${styles.font1} pt-10 `}>
          Bebe Project
        </h1>
        <p className={`mt-6 md:mt-10 leading-relaxed ${styles.font2} px-2`}>
          Bebe Project는 부모와 아이의 삻의 질을 향상시키고 지원하기 위해 기획된
          프로젝트입니다.
          <br /> 부모와 아이를 지원하는 다양한 서비스와 리소스를 제공하고자
          합니다. <br />
          또한 사회 전반에 긍정적인 영향을 미치며, 미래 세대의 발전과 번영에
          기여할 것입니다.
        </p>
      </div>
      <div className="text-lg md:text-xl text-center my-12 md:my-20">
        <h1 className={`text-3xl md:text-5xl ${styles.font1} `}>Team Member</h1>
        <div className={`${styles.font2}`}>
          <p className="mt-6 md:mt-10">Designer : Kim seo yeong 👧🏻</p>
          <p>Frontend Developer : Kim hye yeong 👩🏻</p>
          <p>Backend Developer : Jo hyun duk 🧑🏻‍🦱</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {renderSection(
          "Bebe Company",
          company,
          "베베계열 브랜드와 회사 크루들의 종합적인 정보를 제공하는 페이지입니다.",
          "적응형 웹 페이지",
          "HTML, JavaScript, React, tailwind Css",
          "https://www.mybebe.net/",
          "https://github.com/hye-yeong95/bebe"
        )}
        {renderSection(
          "Bebe Mall",
          mall,
          "아기를 중심으로 한 쇼핑몰 홈페이지입니다.",
          "반응형 웹 페이지",
          "React, Redux toolkit, tailwind Css",
          " https://mall.mybebe.net/",
          "https://github.com/hye-yeong95/bebe-mall"
        )}
        {renderSection(
          "Bebe Diary",
          diary,
          "부모와 아이의 출산, 육아의 일상을 기록하는 홈페이지입니다.",
          "적응형 웹 페이지",
          "React, Redux toolkit, tailwind Css, styled-component",
          " https://diary.mybebe.net/",
          "https://github.com/hye-yeong95/bebe-diary"
        )}
        {renderSection(
          "Portfolio",
          diary,
          "김혜영 포트폴리오 페이지입니다.",
          "반응형 웹 페이지",
          "Next.js, tailwind Css",
          "https://diary.mybebe.net/",
          "https://github.com/hye-yeong95/Portfolio"
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
  link,
  github
) {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <Image
          src={title}
          alt="title"
          className="w-[500px] xl:w-[650px] -z-10"
        />
        <h1
          className={`absolute text-3xl text-white md:text-5xl ${styles.font1}`}
        >
          {titleText}
        </h1>
      </div>
      <div
        className={`flex flex-col xl:flex-row p-2 xl:py-10 gap-2 xl:gap-10 ${styles.font2}`}
      >
        <Image
          src={imageSrc}
          alt="image"
          className="md:w-[500px] border-2 border-blue-300 rounded-lg"
        />
        <div className="md:w-[500px] py-4 lg:py-2 px-4 text-center xl:text-start">
          <p className="text-xl text-gray-700">{description}</p>
          <div className="text-gray-500 mt-6">
            <p className="mb-4 text-sm">{web}</p>
            <p className="my-1">✅ 사용 기술 스택</p>
            <p> : {skills}</p>
            <div className="hover:text-blue-500 mt-5 ">
              <Link href={link}>👉🏻 {titleText} 배포 사이트 보러가기 </Link>
            </div>
            <div className="flex justify-center items-center xl:justify-start gap-2 hover:text-gray-600 mt-1">
              <AiFillGithub />
              <Link href={github}>GitHub account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
