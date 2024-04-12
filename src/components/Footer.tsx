import { Container } from "@radix-ui/themes";
import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  TelegramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "./Icons";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <Container>
        <div className=" py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <LogoIcon />
              <span className="sr-only">max way - icon</span>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-xl font-semibold text-[#003846] tracking-widest mb-3">
                Asosiy
              </h2>
              <ul className="flex flex-col gap-5 mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm">
                    Kompaniya haqida
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm">
                    Filiallar
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm">
                    Bolalar uchun
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-xl font-semibold text-[#003846] tracking-widest mb-3">
                Qo’shimcha
              </h2>
              <ul className="flex flex-col gap-5 mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm">
                    Menyu
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm">
                    Bonusli karta
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm">
                    Bu qanday ishlaydi?
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full "></div>
            <div className="lg:w-1/3 md:w-1/2 w-full">
              <h2 className="text-xl font-semibold text-[#003846] tracking-widest mb-3">
                Biz bilan aloqa
              </h2>
              <ul className="flex flex-col gap-5 mb-10">
                <li>
                  <a
                    href="tel:+998712005400"
                    className=" hover:text-gray-800 text-[#003846]"
                  >
                    (+998 71) 200-54-00
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm">
                    100011, Toshkent sh. Shayxontohur tumani, Zarqaynar
                    ko’chasi, 3B-uy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="">
          <div className="container mx-auto py-4 pr-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © Maxway, 2020
              <a
                href="https://jamshidqayimov.uz"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @jamshidqayimov
              </a>
            </p>
            <ul className="gap-6 inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <li>
                <YoutubeIcon />
                <span className="sr-only">Youtube Icon</span>
              </li>
              <li>
                <FacebookIcon />
                <span className="sr-only">Facebook Icon</span>
              </li>
              <li>
                <InstagramIcon />
                <span className="sr-only">Instagram Icon</span>
              </li>
              <li>
                <TelegramIcon />
                <span className="sr-only">Telegram Icon</span>
              </li>
              <li>
                <TiktokIcon />
                <span className="sr-only">Tiktok Icon</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
