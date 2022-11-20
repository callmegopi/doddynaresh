import { useState } from "react"

export const Gopi = () => {
    const [name, setMyname] = useState("Gopi")
    return (
        <div>
            <button onClick={() => { setMyname("Gopi Chander") }}>Change Name</button>
            <h2>Hello from {name} Component</h2>
        </div>
    )
}
export const Naresh = () => {
    const [naresh, setMynaresh] = useState("Naresh")
    return (
        <div>
            <button onClick={() => { setMynaresh("Naresh and Suresh") }}>Chnage Full Name</button>
            <h2>Hello from {naresh} Component</h2>
        </div>
    )
}
export default Naresh