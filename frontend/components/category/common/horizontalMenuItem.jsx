import Link from "next/link";

const HorizontalMenuItem = (props) => {
    return (
        <div className="navitem">
            <div>
                <Link href="parfyme">
                    <a className="nav-link frontpage-img-wh"><img src="/images/parfyme.png" alt="logo" /></a>
                </Link>
            </div>
            <div>
                <Link href="parfyme">
                    <a> parfyme</a>
                </Link>
            </div>
        </div>
    )
}

export default HorizontalMenuItem

