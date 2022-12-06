import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"
import OGCard from "../../components/ogCard"

export const config = {
  runtime: "experimental-edge",
}

export default async function (req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get("title") ?? "Some title"
  const subtitle = searchParams.get("subtitle") ?? "Some sub"
  const publicationDate = searchParams.get("publicationDate") ?? "Some date"
  const tags = searchParams.get("tags") ?? "Some date"

  return new ImageResponse(
    (
      <OGCard
        title={title}
        subtitle={subtitle}
        publicationDate={publicationDate}
        tags={tags}
      />
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
