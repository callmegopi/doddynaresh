import { useState } from "react"

export  const Students = () => {
    const [students, setStudents] = useState(["Ravi", "ramu", "seetha", "Geetha", "Naresh"])
    return (
        <div>
            {students.map((std) => {
                return <li key={std}>{std}</li>
            })}
        </div>
    )
}
export default Students