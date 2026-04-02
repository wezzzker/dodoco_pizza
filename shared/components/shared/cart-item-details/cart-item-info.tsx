interface Props {
  details: string
  name: string
}

export const CartItemInfo: React.FC<Props> = ({ name, details }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="flex-1 text-lg leading-6 font-bold">{name}</h2>
      </div>
      {details && <p className="w-[90%] text-xs text-gray-400">{details}</p>}
    </div>
  )
}
