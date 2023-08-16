export default function mapIframe (props) {
    const { plus_code } = props

    // encoding the plus code
    let encoded_plus_code = ""
    for (let x = 0; x < plus_code.length; x++) {
        if (plus_code[x] === "+") {
            encoded_plus_code += "%2B"
        } else {
            encoded_plus_code += props.plus_code[x]
        }
    }

    return (
        <iframe
        className="map"
        height="350"
        style={{ border:0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API_KEY}&q=${encoded_plus_code}`}>
        </iframe>
    )
}