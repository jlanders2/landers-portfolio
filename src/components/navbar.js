"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname()
    return pathname === '/' ?
    (
        <div className="center-screen">
            <div className="w-100 d-flex justify-content-center">
                <p className="display-1 fw-bold">
                    <Link className="link-dark navButton font-heading" href="/">John Cole Landers</Link>
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
    )
    :
    (
        <div className="container pt-3">
            <div className="w-100 d-flex justify-content-center">
                <p className="h4 fw-bold">
                    <Link className="link-dark navButton font-heading" href="/">John Cole Landers</Link>
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
    ); 
}