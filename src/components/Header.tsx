import { Container } from "@radix-ui/themes";
import { LogoIcon } from "./Icons";
import UserAvatar from "./Avatar";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white from-60% to-purple to-40% py-[23px]">
      <Container>
        <div className="flex items-center">
          <div className="w-[60%] flex justify-between items-center">
            <a href="/">
              <LogoIcon />
              <span className="sr-only">MaxWay Icon</span>
            </a>

            <nav>
              <ul className="flex gap-10">
                <li>
                  <a className="text-primary" href="#">
                    Menu
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="#">
                    Bolalar uchun
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="#">
                    Filiallar
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex w-[40%] justify-between items-center pl-14">
            <a
              href="tel:+998712005400"
              className='text-white flex items-center gap-4 before:content-[url("./phone-icon.svg")]'
            >
              <span>
                <span className="block text-sm">(+99871)</span>
                <span className="block text-2xl font-bold">200-54-00</span>
              </span>
            </a>

            <span className="w-[1px] h-11 bg-white"></span>

            <a
              href="tel:+998712005400"
              className='text-white flex items-center gap-4 before:content-[url("./cart-icon.svg")]'
            >
              <span>
                <span className="block text-2xl font-bold">Korzina</span>
                <span className="block text-sm">0,00 UZS</span>
              </span>
            </a>
            <a href="#" className="text-white">
              <UserAvatar />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
