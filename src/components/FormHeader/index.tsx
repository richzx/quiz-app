import { GlobeOutline, LogoGithub } from "react-ionicons"
import background from '../../assets/images/bg.png'

const FormHeader = () => {
  return (
    <div className="w-full flex items-center justify-center relative rounded-[10px] " >
      <div className="absolute top-5 left-5 z-[10] flex items-center gap-3 " >
        <a href="#" target="_blank" rel="noreferrer" >
          <LogoGithub color={"fff"} width="25px" height="25px" cssClasses="cursor-pointer" />
          <GlobeOutline color={"fff"} width="25px" height="25px" cssClasses="cursor-pointer" />
        </a>
      </div>
      <span className="absolute text-3xl text-white font-medium left-1/2 bottom-1/2 translate-x-[50%] translate-y-[50%] rounded-tl-[10px] " >
        Quiz App
      </span>
      <img src={background} alt="Quiz App" className="w-full rounded-tr-[10px] rounded-tl-[10px] " />
      <div className="absolute w-full h-full bg-[rgba(54,84,99,0.7)] rounded-tl-[10px] rounded-tr-[10px] " >

      </div>
    </div>
  )
}

export default FormHeader