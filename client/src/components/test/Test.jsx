import { useEffect, useState } from "react"
import getTest from "../../api/test"

import "./test.css"

// test component
function Test () {
    const [data, setData] = useState("Hello wurld :)")

    useEffect(() => {
        getTest()
            .then((res) => setData(res.message))
            .catch((err) => console.log(`getTest() error: ${err}`))
    }, [])

    return (
        <p> { data } </p>
    )
}

export default Test