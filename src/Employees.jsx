import { useState } from "react";

export function Employee() {
    const [employee, setEmployee] = useState(["Ramu", "Seetha", "Geetha", "Naresh", "Naveen"])
    return (
        <div>
            {employee.map((emp) => {
                return <p key={emp}>{emp}</p>
            })}
        </div>
    )
}
