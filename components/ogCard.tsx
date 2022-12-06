interface Props {
  title: string
  subtitle: string
  tags: string
  publicationDate: string
}

const OGCard = ({ title, subtitle, tags, publicationDate }: Props) => {
  const splittedTags = tags.replaceAll(" ", "").split(",")

  return (
    <div
      tw="flex h-[630px] w-[1200px] items-center justify-center"
      style={{
        background:
          "linear-gradient(133deg, rgba(255,107,107,1) 0%, rgba(255,230,109,1) 35%, rgba(78,205,196,1) 100%) url(https:///blog-meta-og-image.vercel.app/noise.svg)",
      }}>
      <div tw="relative flex h-[590px] w-[1160px] flex-col bg-white p-14 py-20">
        <div tw="grow flex">
          <img
            src="https://blog-meta-og-image.vercel.app/_next/image?url=%2Fflavien.webp&w=640&q=75"
            width={200}
            height={200}
            alt="logo"
            tw="h-28 w-28 rounded-full"
          />
        </div>
        <h1 tw={`mb-10 text-5xl font-bold tracking-wide text-[#292F36]`}>
          {title}
        </h1>
        <h2 tw={`mb-4 text-3xl tracking-wide text-[#292F36]`}>{subtitle}</h2>
        <div tw={`flex gap-2 text-lg tracking-wide text-[#292F36]`}>
          <span>{publicationDate}</span>
          {splittedTags && splittedTags.length > 0 && (
            <>
              <span tw="ml-2">·</span>
              <ul>
                {splittedTags.map((tag) => (
                  <li key={tag} tw="ml-2">
                    #{tag.toLowerCase()}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div tw="absolute bottom-10 right-10 flex justify-end">
          <img
            src="https://blog-meta-og-image.vercel.app/logo.svg"
            width={250}
            height={47}
            alt="logo"
          />
        </div>
      </div>
    </div>
  )
}

export default OGCard
