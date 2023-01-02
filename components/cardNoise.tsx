import Image from "next/image"

interface Props {
  title: string
  subtitle: string
  tags: string
  publicationDate: string
}

const CardNoise = ({ title, subtitle, tags, publicationDate }: Props) => {
  const splitTags = tags.replaceAll(" ", "").split(",")

  return (
    <div className="flex h-[630px] w-[1200px] items-center justify-center bg-gradient-to-br from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]">
      <svg
        className="absolute h-[630px] w-[1200px]"
        xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="1"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <div className="relative flex h-[590px] w-[1160px] flex-col bg-white p-14 py-20">
        <div className="grow">
          <Image
            src="/flavien.webp"
            width={200}
            height={200}
            alt="logo"
            className="h-28 w-28 rounded-full"
          />
        </div>
        <h1
          className={`--font-alata mb-10 text-5xl font-bold tracking-wide text-[#292F36]`}>
          {title}
        </h1>
        <h2
          className={`--font-mulish mb-4 text-3xl tracking-wide text-[#292F36]`}>
          {subtitle}
        </h2>
        <div
          className={`--font-mulish flex gap-2 text-lg tracking-wide text-[#292F36]`}>
          <span>{publicationDate}</span>
          {splitTags && splitTags.length > 0 && (
            <>
              <span>·</span>
              <ul className="inline-flex gap-2">
                {splitTags.map((tag) => (
                  <li key={tag}>#{tag.toLowerCase()}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="absolute bottom-10 right-10 flex justify-end">
          <Image src="/logo.svg" width={250} height={47} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default CardNoise
