import './Link.css'

export const Link = (props) => (
        <a
          className="App-link"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.text}
        </a>
)