

interface btnTypes{
    btnText: string,
    btnStyle: string
}

const Button = ({btnText, btnStyle}: btnTypes) => {
  return (
    <div className={`rounded ${btnStyle} px-4 py-2 cursor-pointer`}>{btnText}</div>
  )
}

export default Button