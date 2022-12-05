interface Props {
  title: string
  subtitle: string
}

const OGCard = ({ title, subtitle }: Props) => {
  return (
    <div
      tw="flex h-[630px] w-[1200px] items-center justify-center"
      style={{
        background:
          "linear-gradient(133deg, rgba(255,107,107,1) 0%, rgba(255,230,109,1) 35%, rgba(78,205,196,1) 100%)",
      }}>
      <div tw="relative flex h-[590px] w-[1160px] flex-col gap-10 bg-gray-300 p-10 px-24">
        <h1
          tw={`mt-6 max-w-[90%] text-7xl font-bold tracking-wide text-[#292F36]`}>
          {title}
        </h1>
        <h2 tw={`max-w-[80%] text-3xl tracking-wide text-[#292F36]`}>
          {subtitle}
        </h2>
        <div tw="absolute right-10 bottom-10 flex items-center gap-10"></div>
      </div>
    </div>
  )
}

export default OGCard
