import { useState } from "react";

export function School() {
    const [school, setSchool] = useState({
        "id": 17,
        "email": "MBishop@adipiscing.gov",
        "username": "KGarner",
        "password": "gEuaM"
    })
    const handleDelete = (scl) => {
        console.log("handleDeleet called...", scl)
        let allSchools = { ...school }
        delete allSchools[scl]
        setSchool(allSchools)
    }

    return (
        <div>
            {Object.keys(school).map((scl) => {
                return <p key={scl} onClick={() => { handleDelete(scl) }}>{scl} : {school[scl]}</p>
            })}

            {Object.keys(school).length === 0 && <p>Object completed Deleetd</p>}
        </div>
    )
}
export default School