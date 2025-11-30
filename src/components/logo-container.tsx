import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/svg/logo.svg"
        alt=""
        className="min-w-20 h-20 object-contain"
      />
    </Link>
  );
};
