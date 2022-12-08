interface Props {
  noMargin?: true
  children: string
}

const Label = ({ noMargin, children }: Props) => {
  return (
    <label className={`mb-2 font-semibold ${noMargin ? "" : "mt-6"}`}>
      {children}
    </label>
  )
}

export default Label
