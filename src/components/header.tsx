import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-40 border-b bg-white/70 dark:bg-neutral-950/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60",
        "duration-200 transition-all ease-in-out"
      )}
    >
      <Container>
        <div className="flex items-center gap-4 w-full py-3">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-1 rounded-sm px-4 py-1 bg-secondary/70 border border-border">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-sm px-2 py-2 rounded-full text-amber-900 hover:text-amber-950 hover:bg-white/70",
                    "transition-colors",
                    isActive && "text-amber-950 font-semibold bg-white"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            {/* profile section */}
            <ProfileContainer />

            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
