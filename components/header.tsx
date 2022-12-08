interface Props {}

const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 py-4 shadow">
      <h1 className="text-3xl italic underline decoration-lime-600">
        Meta generation
      </h1>
      <p className="text-md font-bold">
        <span className="mr-1">By</span>
        <a
          href="https://www.flavienbonvin.com"
          target="_blank"
          rel="nofollow"
          className="text-blue-600 underline decoration-blue-600 visited:text-lime-600 visited:decoration-lime-600">
          Flavien Bonvin
        </a>
      </p>
    </div>
  )
}

export default Header
