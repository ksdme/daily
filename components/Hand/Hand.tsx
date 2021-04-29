import classnames from 'classnames'

interface Props {
  text: string
  handColor?: string
  textColor?: string
  center?: boolean
}

export default function Hand({ text, handColor = 'gray-600', textColor = 'black', center = true }: Props) {
  const classes = classnames({
    'transform -translate-y-1/2': center,
  })

  return (
    <div className={`w-full ${classes}`}>
      <div className={`text-right text-sm text-${textColor} line-clamp-1`}>
        {text}
      </div>

      <div className={`h-0.5 rounded-r bg-${handColor}`}>
        &nbsp;
      </div>
    </div>
  )
}
