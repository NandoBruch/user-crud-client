import { useLogout } from "@/hooks/api/auth/useLogout";
import Link from "next/link";

const Header = () => {
  const logout = useLogout();

  const handleLogout = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    logout();
  };
  return (
    <header className="h-32 bg-gray-900 text-white">
      <nav className=" h-full container flex items-center justify-between">
        <div>Logo</div>
        <div>
          <ul className="flex gap-8">
            <li>
              <Link href={"/users"}>Usuários</Link>
            </li>
            <li>
              <Link onClick={handleLogout} href={"/"}>
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
