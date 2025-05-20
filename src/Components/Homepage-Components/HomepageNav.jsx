import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import HomePageNavItems from "./HomePageNavItems";
import LoginButton from "./LoginButton";
import { useSpring, animated } from "react-spring";
import HamburgerMenu from "./Hamburger";

function Nav() {
  const [animReady, setAnimReady] = useState(false);

  useEffect(() => {
    setAnimReady(true);
  }, []);

  const logoProps = useSpring({
    from: animReady ? { opacity: 0, transform: "translateX(-100px)" } : {},
    to: animReady ? { opacity: 1, transform: "translateX(0px)" } : {},
    config: { tension: 120, friction: 20, mass: 1 },
    delay: 300,
  });

  return (
    <nav className="nav">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="active"
        className="logo"
      >
        <animated.div style={logoProps} className="text-logo">
          orthosprint
        </animated.div>
        {/* <div>Logo</div> */}
      </Link>
      {/* Desktop navigation */}
      <HomePageNavItems type="desktop" activeClass="active" />

      {/* Desktop login button */}
      <LoginButton className="desktop-login-btn" />

      {/* Mobile hamburger menu - will show on smaller screens */}
      <HamburgerMenu />
    </nav>
  );
}

export default Nav;
