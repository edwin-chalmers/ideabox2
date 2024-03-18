import "./Card.css"

function Card({ title, description }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>🚫</button>
        </div>
    )
}

export default Card