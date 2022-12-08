import type { NextPage } from "next"
import Link from "next/link"
import { useState } from "react"
import Card from "../components/card"
import CardNoise from "../components/cardNoise"
import Header from "../components/header"
import Label from "../components/label"

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
      <Header />
      <div className="mb-20 flex flex-col gap-4 p-10">
        <div className="flex max-w-2xl flex-col">
          <h1 className="mb-3 text-2xl font-bold tracking-wide">
            Generate your card
          </h1>
          <p className="mb-10 max-w-lg text-gray-600">
            Enter the information you wants and click the "Genreate image"
            button. Your image will be generated on the fly and you can copy and
            paste the URL.
          </p>
          <div className="mb-10 flex w-full flex-col">
            <Label noMargin>Title</Label>
            <textarea
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <Label>Subtitle</Label>
            <input
              maxLength={60}
              type="text"
              onChange={(e) => setsubTitle(e.target.value)}
              value={subTitle}
            />
            <Label>Publication date</Label>
            <input
              type="text"
              onChange={(e) => setPublicationDate(e.target.value)}
              value={publicationDate}
            />
            <Label>Tags (comma separated)</Label>
            <input
              type="text"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
              placeholder="Comma separated tags"
            />
          </div>
          <Link
            href={`/api/og?title=${title}&subtitle=${subTitle}&publicationDate=${publicationDate}&tags=${tags}`}
            target="_blank">
            <button className="w-fit rounded border border-lime-600 bg-lime-100 px-2 py-1.5 text-lime-600 shadow">
              Generate image
            </button>
          </Link>
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
  )
}

export default Home
