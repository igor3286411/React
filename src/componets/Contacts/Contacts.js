import './Contacts.css'

export const Contacts = (props) => {
    return (
        <div className="contacts">
            <h2 className="contacts-h2">IT-школа Myfreedom</h2>
            <p className="contacts-address">Адрес: {props.address}</p>
            <p className="contacts-email">Email: {props.email}</p>
            <p className="contacts-tel">Телефон: {props.tel}</p>
        </div>
    )
}