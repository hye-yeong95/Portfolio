import green from "../../../public/green.png";
import Image from "next/image";
import styles from "../../../styles/fonts.module.css";

export default function Introduce() {
  return (
    <div
      className={`flex flex-col items-center text-center gap-2 xl:gap-10 px-4 ${styles.font2}`}
    >
      <div className="relative flex justify-center items-center my-12 ">
        <Image src={green} alt="green" className="w-[180px] md:w-[300px]" />
        <h1 className={`absolute text-4xl md:text-5xl ${styles.font2}`}>
          자기소개서
        </h1>
      </div>
      <div className="md:w-[600px]">
        <h1 className="text-2xl md:text-3xl py-8 text-teal-700">
          * 개발자로서의 시작 *
        </h1>
        <p className="w-[500px] md:w-[600px] text-start text-base md:text-xl text-gray-700 leading-loose">
          지인의 소개로 프론트엔드 개발을 시작하게 되었습니다.
          <br />제 전공 분야와 다르기 때문에 초반에는 어려움을 겪었지만, 공식
          문서와 동영상 강의를 통해 반복적으로 학습하였습니다.
          <br />
          디자이너와 백엔드 개발자와 함께 프로젝트를 함으로써 실제 웹사이트를
          구축하는 경험을 하였고 이러한 경험은 생각보다 흥미롭고 개발자로서 저의
          모습을 상상해 볼 수 있었습니다.
          <br />
          프로젝트를 진행할수록 개발에 대한 열정이 더 깊어지게 되었습니다.{" "}
          <br />
          프론트엔드 개발자로서 역량을 키우며 발전시키고 싶습니다.
        </p>
        <h1 className="text-2xl md:text-3xl py-8  text-teal-700">
          * 지원동기 *
        </h1>
        <p className="w-[500px] md:w-[600px] text-start text-base md:text-xl text-gray-700 leading-loose">
          지금 보유하고 있는 제 기술은 HTML, CSS, Javascript 그리고
          React.JS입니다.
          <br /> 또한 Next.JS와 Typescript를 학습하고 적용해 나가고 있습니다.
          <br /> 이런 기술들을 활용하여 빠르게 실무에 적응하고 성장하고 싶은
          마음이 큽니다.
          <br />
          새로운 환경에서 적용하여 성장하는 모습을 보여 드리겠습니다.
        </p>
        <h1 className="text-2xl md:text-3xl py-8 text-teal-700">* 장점 *</h1>
        <p className="w-[500px] md:w-[600px] text-start text-base md:text-xl text-gray-700 leading-loose">
          능동적인 자세로 업무를 수행합니다.
          <br />
          맡은 일을 성공적으로 수행하기 위해 업무를 미리 파악하고 계획을 세워
          일을 하는 능력을 갖추고 있습니다.
          <br />팀 내에 리더 역할을 맡아 팀을 이끌고, 서비스직에서 다양한
          사람들과 만난 경험이 있어 원활한 의사소통이 가능합니다.
          <br />
          이러한 저의 장점들이 업무를 하는 데 있어서 긍정적인 영향을 미친다고
          생각합니다.
          <br />
          함께 목표를 달성하는 과정에서 주도적으로 기여하고, 적극적인 자세로
          성과를 이뤄내기 위해 최선을 다하겠습니다.
        </p>
        <h1 className="text-2xl md:text-3xl py-8  text-teal-700">* 단점 *</h1>
        <p className="w-[500px] md:w-[600px] text-start text-base md:text-xl text-gray-700 leading-loose">
          걱정이 많은 편입니다.
          <br />
          걱정과 걱정으로 인한 망설임을 극복하기 위해 문구나 책을 읽어 자신감과
          자존감을 올려주는 편이며, 계획을 세우고 그 계획을 실행함으로 일을
          처리하려고 합니다.
        </p>
        <h1 className="text-2xl md:text-3xl py-8  text-teal-700">
          * 입사 후 목표 *
        </h1>
        <p className="w-[500px] md:w-[600px] text-start text-base md:text-xl text-gray-700 leading-loose">
          업무를 신속하게 파악하고 적응하여 팀에 도움이 되는 팀원이 되고자
          합니다.
          <br />
          개발자로서의 성장을 위해 개인적인 공부를 꾸준히하며, 익힌 기술을
          바탕으로 UI/UX를 고려하는 개발자가 될 것입니다.
          <br />
          훗날 주니어 개발자들을 이끌어 갈 수 있는 시니어 개발자가 되도록
          기술적인 면뿐만 아니라 팀 안에서의 의사소통 능력과 리더십 능력도 함께
          높여 조직 내에서 믿음직한 리더가 되도록 노력하겠습니다.
        </p>
      </div>
    </div>
  );
}
