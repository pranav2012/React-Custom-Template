import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '@redux/actions'

const Counter = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className="text-red-400">
        Count: <span>{count}</span>
      </h1>
      <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(incrementCount())}>+1</button>
      <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrementCount())}>-1</button>
      <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  )
}

export default Counter
