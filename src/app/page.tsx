import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center  p-24 gap-4 rounded-md">
      <div className="flex w-60 h-60 bg-gray-300"></div>
      <div className="flex w-full h-12 max-w-60 bg-white text-black rounded-md  justify-center items-center hover:bg-slate-600 hover:text-slate-50 cursor-pointer">
        이미지 등록하기
      </div>
    </div>
  );
}
