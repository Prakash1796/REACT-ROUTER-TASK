import { Link } from "react-router-dom"


function Footer() {
  return (
    <>
    <footer className="py-5 bg-dark">
        <div className="container">
            <p className="m-0 text-center text-white">Copyright <Link to={"mailTo:edgeprakash1796@gmail.com"}>©edgeprakash1796@gmail.com</Link> 2024</p>
        </div>
    </footer>
    </>
  )
}

export default Footer;