export default function Map (props) {
    const { coordinates } = props
    
    return (
        <iframe
        width="600"
        height="450"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src={ `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.GOOGLE_API_KEY}&q=${props.location}` }>
        </iframe>
    )
}