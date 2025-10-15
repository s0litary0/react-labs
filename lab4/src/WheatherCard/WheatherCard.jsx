import './WheatherCard.css'
// import cloudy from '../assets/icons/wheather/PartlyCloudy.png'
// import sunny from '../assets/icons/wheather/Sunny.png'
// import rainy from '../assets/icons/wheather/Rainy.png'


export default function WheatherCard({date, temp, condition, icon}) {
    const options = {
        weekday: 'long', // Full weekday name (e.g., "Saturday")
        day: 'numeric',  // Day of the month (e.g., "4")
        month: 'long',   // Full month name (e.g., "October")
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // let conditionsMap = new Map([
    //     ['Sunny', sunny],
    //     ['Partly Cloudy', cloudy],
    //     ['Overcast', cloudy],
    //     ['Cloudy', cloudy],
    //     ['Moderate rain', rainy],
    //     ['Patchy rain nearby', rainy]
    // ]);
    return (
        <article className='wheather-card'>
            <h2 className='date'>{formattedDate}</h2>
            <img className='condition-img' src={icon} alt={condition} />
            <p className='temperature'>{temp}°C</p>
        </article>
    )
}