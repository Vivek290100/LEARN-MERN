
// const isAuthenticated = true
// const Hoc = (Component) =>{
//     return function (){
//         if(!isAuthenticated){
//             return <h1>not authenticated</h1>
//         }
//         return <Component/>
//     }
// }

import { useState } from "react"

// export default Hoc


// import {Auth} from "hoc"
// const one = () => {
//   return (
//     <div>one</div>
//   )
// }

// export default Auth(one)


const useCustomHook = () => {
    const [data, setdata] = useState("")
    const geetData = () => {

        async function fetchdata() {
            const response = await fetch(Url)
            const data = await response.json()
            setdata(data)
        }
        fetchdata()
    }
    return (data, geetData)
}

export default useCustomHook()