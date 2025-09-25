import './AboutUs.css';

export default function AboutAs() {
    return (
        <section className="about-section open-sans-main-text">
            <div className="container">
                <div className="title-container">
                    <span className="title"> About Us </span>
                </div>
                <div className="text">
                    Welcome to SkillWay! <br/> We are a passionate team building a modern
                    education platform for interactive learning.
                </div>

                <p> Contact Us </p>
                <ul className="list-style-one">
                    <li> Email: <a href="mailto:sultanbaibolov1@gmail.com"> sultanbaibolov1@gmail.com </a></li>
                    <li> Phone: <a href="tel:+77762868673"> +7 776 286 86 73 </a></li>
                    <li>
                        Social: 
                        <ul className="list-style-one">
                            <li>
                                <a href="https://t.me/solitary98">Telegram</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/electr0statiq/">Instagram</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}