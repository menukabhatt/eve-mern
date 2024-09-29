import { DiApple, DiBackbone, DiCss3, DiDjango, DiJava, DiJavascript, DiNodejs, DiPython } from "react-icons/di";

const Tech = () => {
  return (
    <div className="grid grid-cols-4 place-items-center">

      <DiCss3 size={200} className="hover:scale-125 ease-in duration-150 hover:text-pink-700 cursor-pointer" />
      <DiJavascript size={200} />
      <DiNodejs size={200} />
      <DiPython size={200} />
      <DiJava size={200} />
      <DiDjango size={200} />
      <DiApple size={200} className="animate-bounce  " />
      <DiBackbone size={200} />
    </div>
  )
}
export default Tech