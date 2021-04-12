import { FC, useEffect, useState } from 'react'

const Counter: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count)
  }, [count])

  /**
   * useEffectは、第一引数にcallbackを入れて、第二引数に依存する値の配列を入れる
   * 依存する値が変更される度にcallbackが実行される
   */
  return (
    <div className="p-20">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>カウント</button>
    </div>
  )
}

export default Counter
