import { Link } from "react-router-dom"
import "./NotFound.css"


export default function NotFound() {
  return (
  <>
    <h1>Page not found!</h1>
    <Link className="back-link" to="/">← Go back to home</Link>
  </>
)
}