import './LoadButton.css'

export default function LoadButton({handler}) {
    return (
        <button className='btn' onClick={handler}>Load Forecast</button>
    )
}