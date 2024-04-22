import useCounter from "./UseCounter"

export default function Counter2() {
    const[count,inc,dec,res]=useCounter(0,1)
  return (
    <div>
      {count}
      <button onClick={inc}>incre</button>
      <button onClick={dec}>decre</button>
      <button onClick={res}>reset</button>
    </div>
  )
}
                                                                                                             