import Image from "next/image";
import redLine from "../../public/red.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "../../styles/fonts.module.css";
import khy from "../../public/khy.jpeg";
import Projects from "./projects/page";
import Link from "next/link";
import css from "../../public/skills/css3.png";
import html from "../../public/skills/html5.png";
import js from "../../public/skills/javascript.png";
import next from "../../public/skills/next.png";
import react from "../../public/skills/react.png";
import redux from "../../public/skills/redux.png";
import tailwind from "../../public/skills/tailwind.png";
import ts from "../../public/skills/typescript.png";

function Section({ title, children }) {
  return (
    <div className="md:text-xl leading-relaxed md:leading-loose px-4">
      <div className="flex justify-center items-center my-10 md:my-20 ">
        <Image src={redLine} alt="redLine" className="w-[200px] md:w-[300px]" />
        <h1 className={`absolute text-4xl md:text-5xl mb-6 ${styles.font1}`}>
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <Section title="Introduce">
        <div className={`${styles.font2} px-2 mb-8`}>
          <p className="mb-8 text-lg md:text-2xl">
            👋 프론트엔드 개발자 김혜영입니다.
          </p>
          ✅ HTML, CSS, JavaScript 및 React.js를 활용하여 베베 프로젝트를 구축
          <br />
          ✅ 디자이너, 백엔드 개발자와의 협업을 통한 팀워크의 중요성과 프로젝트
          구축 흐름 이해
          <br /> ✅ 웹 어플리케이션의 성능과 유지보수성을 높이는 Next.js와
          Typescript를 학습중
          <br />✅ Next.js를 활용하여 포트폴리오를 제작, Bebe Mall에
          Typescript를 적용
        </div>
      </Section>
      <Section title="Profile">
        <div
          className={`flex flex-col items-center gap-3 pt-4 ${styles.font2} mb-8`}
        >
          <Image src={khy} alt="khy" className="w-60 mb-8" />
          <p>이름 : 김혜영</p>
          <p>나이 : 28세</p>
          <p>생년월일 : 95년 07월 31일 </p>
          <p>학력 : 한경대학교 식물생명환경과학과(학사)</p>
          <p className="flex items-center gap-2">
            <AiOutlineMail />
            ghdwls69@naver.com
          </p>
          <p className="flex items-center gap-2">
            <BsFillTelephoneFill />
            010 - 2629 - 9655
          </p>
        </div>
      </Section>
      <Section title="How to study">
        <div className={`${styles.font2} px-2 mb-8`}>
          <p className="mb-8">공부한 기간 : 2022년 9월부터 개발 공부 시작</p>
          <p>
            ✏️ 동영상 강의 공식문서를 활용해 기본 개념 배움
            <br /> ✏️ 반복하면서 클론 코딩
            <br /> ✏️ 나만의 프로젝트를 기획하고 시작
            <br /> ✏️ 기본적인 코드를 만들어 반복
            <br /> ✏️ 코드를 간략화하고 더 나은 기능들을 적용하면서 코드 수정
          </p>
          <h1 className="py-8">* 독학으로 한 이유 *</h1>
          <p>
            ✅ 학습 목표와 계획을 세워서 할 수 있는 장점
            <br /> ✅ 학원이나 부트 캠프보다 속도가 느리지만 스스로 해결하는
            능력을 키울 수 있음
          </p>
        </div>
      </Section>
      <Section title="Cover Letter">
        <Link
          href={"/intro"}
          className={`${styles.font2} hover:text-orange-300 bg-red-300`}
        >
          <p className="mb-12 text-lg md:text-2xl">👉🏻 자기소개서 보러가기</p>
        </Link>
      </Section>
      <Section title="Skills">
        <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-8 py-4 mb-6">
          <div className="flex gap-2 md:gap-8">
            <Image src={css} alt="css" className="p-2 md:p-0" />
            <Image src={html} alt="html" className="p-2 md:p-0" />
            <Image src={js} alt="js" className="p-2 md:p-0" />
            <Image src={next} alt="next" className="p-2 md:p-0" />
          </div>
          <div className="flex gap-2 md:gap-8">
            <Image src={ts} alt="react" className="p-2 md:p-0 w-20 h-20" />
            <Image src={react} alt="react" className="p-2 md:p-1" />
            <Image src={redux} alt="redux" className="p-3 md:p-2" />
            <Image src={tailwind} alt="tailwind" className="p-2 md:p-0" />
          </div>
        </div>
      </Section>
      <Section title="Projects">
        <h1 className={`${styles.font2} mb-6`}>
          <p className="md:py-8 text-lg md:text-2xl">
            {" "}
            👉🏻 이미지를 누르면 상세한 프로젝트 내용을 볼 수 있습니다.
          </p>
        </h1>
        <Projects />
      </Section>
    </main>
  );
}
