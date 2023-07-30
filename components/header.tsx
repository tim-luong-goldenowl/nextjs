import Link from 'next/link'
import styles from '../styles/layout/Header.module.scss'

export default function Header() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.donationApp}`}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <Link href={'/donation-receivers'} className='nav-link'>
                        <div>
                            Donation Receivers
                        </div>
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}