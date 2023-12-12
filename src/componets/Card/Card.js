import './Card.css'

export const Card = (props) => {
    return (
        <div className="card">
            <h2 className="card-h2">{props.textH2}</h2>
            <p className="card-p">{props.textP}</p>
            <button className="card-button">Подробнее</button>
        </div>
    )
}