import './LoadButton.css'

export default function LoadButton({handler}) {
    return (
        <button onClick={handler}>Load Forecast</button>
    )
}