import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/about">À propos</Link>
                </li>
                <li className="menu-item-has-children"><Link href="#">Services <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/services">Services 01</Link></li>
                        <li><Link href="/services-two">Services 02</Link></li>
                        <li><Link href="/services/data-analytics">Services Details</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">Portfolio </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/blog">Blog</Link>   
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;