import MainNavigation from "./MainNavigation";
import Button from "./Button";
import Logo from "./Logo";

import styles from "./Navigation.module.css";

const Header = () => {
  return (
    <div
      className={`z-10 sticky top-0 bg-azul-git bg-opacity-80 bg-clip-padding ${styles.blur_backdrop_filter}`}
    >
      <div className="flex items-center p-3 py-8 justify-between">
        <Logo />
        <MainNavigation />
        <Button type="secundary">Join</Button>
      </div>
    </div>
  );
};

export default Header;
