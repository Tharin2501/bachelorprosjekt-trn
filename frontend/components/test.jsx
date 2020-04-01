export const MyDrawer = () => {

    const [openLeft, setOpenLeft] = useState(false);
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);
    const [overLay, setOverlay] = useState("rgba(255,255,255,0.6)");
    console.log(openLeft)

    const handleCloseing = () => {
        setOpenLeft(false)
    }

    return (

        <div>
            <div>
                <ul className="left">
                    <li style={{ cursor: "pointer", height: "100%" }}>
                        <a onClick={() => setOpenLeft({ openLeft: true })}>
                            <GiHamburgerMenu />
                        </a>
                    </li>
                </ul>
            </div>

            <Drawer overlayColor={overLay}
                width={width}
                fadeOut
                open={openLeft}
                noTouchOpen={noTouchOpen}
                noTouchClose={noTouchClose}>

                <div style={{ backgroundColor: `grey`, width: "100%", height: "100%" }}>
                    <ul>
                        <li className="nav_submenu-item">
                            <a><DrawerContent_Makeup /></a>
                        </li>
                        <li className="nav_submenu-item">
                            <a><DrawerContent_Hudpleie /></a>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export const DrawerContent_Makeup = () => {

    const [openLeft, setOpenLeft] = useState(false);

    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);
    const [overLay, setOverlay] = useState("rgba(255,255,255,0.6)");



    return (
        <div>
            <ul>
                <li className="nav_submenu-item" onClick={() => setOpenLeft({ openLeft: true })}>
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <h1>Makeup</h1>
                </li>
            </ul>

            <Drawer overlayColor={overLay}
                width={width}
                fadeOut
                open={openLeft}
                noTouchOpen={noTouchOpen}
                noTouchClose={noTouchClose}>
                {MyMakeup}
            </Drawer>
        </div>
    );
}


export const MyMakeup = () => {

    return (
        <div style={{ backgroundColor: `grey`, width: "100%", height: "100%" }}>
            <ul>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="makeup">
                        <h1 className="nav-link">All Makeup</h1>
                    </Link>
                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="#">
                        <h1 className="nav-link">Ansikt</h1>
                    </Link>
                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="#">
                        <h1 className="nav-link">Øyne</h1>
                    </Link>
                </li>
            </ul>
        </div>
    );
};


export function DrawerContent_Hudpleie() {

    const [openLeft, setOpenLeft] = useState(false);
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);

    const drawerProps = {
        overlayColor: "rgba(255,255,255,0.6)",
    };

    return (
        <div>
            <ul>
                <li className="nav_submenu-item" onClick={() => setOpenLeft({ openLeft: true })}>
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <h1>Hudpleie</h1>
                </li>
            </ul>

            <Drawer {...drawerProps}
                width={width}
                fadeOut
                open={openLeft}
                noTouchOpen={noTouchOpen}
                noTouchClose={noTouchClose}>
                {MyHudpleie}
            </Drawer>
        </div>
    );
}

export const MyHudpleie = () => {

    return (
        <div style={{ backgroundColor: `grey`, width: "100%", height: "100%" }}>
            <ul>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="hudpleie">
                        <h1 className="nav-link">All Hudpleie</h1>
                    </Link>
                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="#">
                        <h1 className="nav-link">Ansikt</h1>
                    </Link>
                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="#">
                        <h1 className="nav-link">Kropp</h1>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
