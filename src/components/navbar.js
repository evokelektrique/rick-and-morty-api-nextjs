"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [burgerActive, setBurgerActive] = useState(false);

    function handleBurger() {
        setBurgerActive(!burgerActive);
    }

    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" href="/">
                    <Image src="/morty.svg" width="112" height="28" alt="logo" />
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={handleBurger}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu ${burgerActive && 'is-active'}`}>
                <div className="navbar-start">
                    <Link href={"/characters"} className="navbar-item">
                        Characters
                    </Link>

                    <Link href={"/episodes"} className="navbar-item">
                        Episodes
                    </Link>

                    <Link href={"/locations"} className="navbar-item">
                        Locations
                    </Link>
                </div>
            </div>
        </nav>
    )
}