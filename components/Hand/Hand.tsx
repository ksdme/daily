interface Props {
  text: string
  handColor?: string
  textColor?: string
}

export default function Hand({ text, handColor = 'gray-600', textColor = 'black' }: Props) {
  return (
    <div className="w-full">
      <div className={`text-right text-sm text-${textColor} line-clamp-1`}>
        {text}
      </div>

      <div className={`h-0.5 rounded-r bg-${handColor}`}>
        &nbsp;
      </div>
    </div>
  )
}