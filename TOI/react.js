// // customHook

// const useCustom = () => {
//     const [date,setData] = useState()

//     const increment = () =>{
//         setData(data+1)
//     }
//     const decrement = () =>{
//         setData(data-1)
//     }

//   return {data,increment, decrement}
// }


// const react = () => {
//     const {count, increment, decrement} = useCustom()
//   return (
//     <div>
//         <h1>count:{count}</h1>
//         <button onClick={increment}>inc</button>
//         <button onClick={decrement}>inc</button>
//     </div>
//   )
// }

// export default react


// const nameContext = createContext()
// const name = "vivek"
// export const context = ({ children }) => {

//     return (
//         <context.provider value={name}>
//             {children}
//         </context.provider>
//     )
// }

// export const useName = () =>{
//     return useContext(nameContext)
// }


// const react = () => {
//     const name = useName()
//   return (
//     <div>{name}</div>
//   )
// }

// export default react



const react = () => {
  return (
    <div>react</div>
  )
}

export default react