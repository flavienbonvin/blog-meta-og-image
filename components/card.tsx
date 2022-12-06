import Image from "next/image"

import { Alata, Mulish } from "@next/font/google"

const alata = Alata({ weight: ["400"] })
const mulish = Mulish({ weight: ["200", "300", "400", "700", "800"] })

interface Props {
  title: string
  subtitle: string
}

const Card = ({ title, subtitle }: Props) => {
  return (
    <div className="flex h-[630px] w-[1200px] items-center justify-center bg-gradient-to-br from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]">
      <div className="relative flex h-[590px] w-[1160px] flex-col gap-10 bg-white p-10 px-24">
        <h1
          className={`mt-6 max-w-[90%] text-7xl font-bold tracking-wide text-[#292F36] ${alata.className}`}>
          {title}
        </h1>
        <h2
          className={`max-w-[80%] text-3xl tracking-wide text-[#292F36] ${mulish.className}`}>
          {subtitle}
        </h2>
        <div className="absolute right-10 bottom-10 flex items-center gap-10">
          <Image
            src="/flavien.webp"
            width={200}
            height={200}
            alt="author"
            className="h-20 w-20 rounded-full"
          />
          <Image
            src="/logo.svg"
            width={250}
            height={47}
            alt="logo"
            className="opacity-90"
          />
        </div>
      </div>
    </div>
  )
}

export default Card
