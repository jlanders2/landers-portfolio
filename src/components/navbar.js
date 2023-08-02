import Link from "next/link";

export function Navbar() {
    return <div className="container pt-3">
        <div className="w-100 d-flex justify-content-center">
            <p className="h4 fw-bold">
                John Cole Landers
            </p>
        </div>
        <div className="d-flex justify-content-center">
            <ul className="list-group list-group-horizontal list-group-flush">
                <li className="list-group-item list-group-item-action text-center border-0 navButton">
                    <Link className="link-dark" href="/about">About</Link>
                </li>
                <li className="list-group-item list-group-item-action text-center border-0 navDivider">
                    /
                </li>
                <li className="list-group-item list-group-item-action text-center border-0 navButton">
                    <Link className="link-dark" href="/resume">Resume</Link>
                </li>
                <li className="list-group-item list-group-item-action text-center border-0 navDivider">
                    /
                </li>
                <li className="list-group-item list-group-item-action text-center border-0 navButton">
                    <Link className="link-dark" href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div> 
}