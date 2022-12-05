import type { NextPage } from "next"
import Link from "next/link"
import { useState } from "react"
import Card from "../components/card"
import CardNoise from "../components/cardNoise"

const Home: NextPage = () => {
  const [title, setTitle] = useState(
    "How to Choose the Best JavaScript Library for Your React and Next Project?"
  )
  const [subTitle, setsubTitle] = useState(
    "6 things to consider before using a library"
  )

  const [publicationDate, setPublicationDate] = useState("5th Dec")
  const [tags, setTags] = useState("")

  return (
    <div>
      <h1 className="pt-10 text-center text-3xl italic underline decoration-lime-500">
        Meta generation
      </h1>
      <div className="mb-20 flex flex-row gap-4 p-10">
        <div className="flex w-[500px] flex-col gap-10">
          <h1 className="text-2xl font-bold tracking-wide">
            Preview of the card
          </h1>
          <div className="flex flex-col gap-2">
            <label>Title</label>
            <textarea
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label>Subtitle</label>
            <input
              maxLength={60}
              type="text"
              onChange={(e) => setsubTitle(e.target.value)}
              value={subTitle}
            />
            <label>Publication date</label>
            <input
              type="text"
              onChange={(e) => setPublicationDate(e.target.value)}
              value={publicationDate}
            />
            <label>Tags (comma separated)</label>
            <input
              type="text"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </div>
          <Link
            href={`/api/og?title=${title}&subtitle=${subTitle}&publicationDate=${publicationDate}`}
            target="_blank">
            <button className="w-fit rounded border px-2 py-1.5">
              Generate image
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <Card title={title} subtitle={subTitle} />
          </div>
          <div>
            <CardNoise
              title={title}
              subtitle={subTitle}
              publicationDate={publicationDate}
              tags={tags}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
