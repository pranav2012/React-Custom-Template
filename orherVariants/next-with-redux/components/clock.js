import { useSelector } from 'react-redux'

const formatTime = (time) => {
  return new Date(time).toJSON().slice(11, 19)
}

const Clock = () => {
  const lastUpdate = useSelector((state) => state.timer.lastUpdate)
  const light = useSelector((state) => state.timer.light)
  return (
    <div className={light ? 'bg-[#999]' : 'p-4 inline-block text-[#82fa58] bg-black'}>
      {formatTime(lastUpdate)}
    </div>
  )
}

export default Clock
