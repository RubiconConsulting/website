
interface InsightTypes{
    img: string,
    title: string,
    text: string
}
const InsightCard = ({img, title, text}: InsightTypes) => {
  return (
    <div className="flex flex-col gap-4">
        <img src={img} alt="" className="w-full"/>
        <h2 className="font-[600] text-xl">{title}</h2>
        <p className="text-sm">{text}</p>
    </div>
  )
}

export default InsightCard