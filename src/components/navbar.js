import Link from "next/link";

export function Navbar() {
    return <div className="container pt-5">
            <div className="d-flex justify-content-center">
                <ul className="list-group list-group-horizontal list-group-flush">
                    <li className="list-group-item list-group-item-action text-center border-0">
                        <Link className="link-dark" href="/about">About</Link>
                    </li>
                    <li className="list-group-item list-group-item-action text-center border-0">
                        <Link className="link-dark" href="/resume">Resume</Link>
                    </li>
                    <li className="list-group-item list-group-item-action text-center border-0">
                        <Link className="link-dark" href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
    </div> 
}