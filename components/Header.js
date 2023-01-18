import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md ">
      <div className="flex items-center ">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB6CAMAAAA1ZBclAAAAbFBMVEX///8Yd/IAaPHB0vrT4PwAcfIOdfJQjPPs8v0AbfHy9f4/hfMAZvEAb/Hi6v0Aa/EAX/BakvT3+f4AYvCevPjL2vutxvnd5vy5zvqPs/fF1vt7ovWDqvaZufg2gfNGifMne/JvnvWkwfhsmfVy/YXWAAAFEElEQVR4nO2cbZeqLBSGtYTEQtIyLc3e/v9/fKw56zmOwG5jAZ61vL/NcpzhWmw2+wUMglmzZs2aNWuWgZK0qI63y1XsttvtTlwvt2NVlInvYeEVV3XWMsEIpeGPKCXdz21WH2Lfg0MoKc/XTTf6UKWOZBMeJz4dyT0jTD3+/zkYz/bTpUibnvkAIoTVZe57tCqVNWfvx/9HXNSR7wFLSmpK0ARPkyLkNrH1vSccYUSDuSDnCRlUmpkTPMVWUzGo/L4bRdCJbvfTmIqMjyR4TUU2AYiCGK1lSYSffCNUZu5IIUoOfhH2b3ZllNjZJ8L5GwghFcd/HaET8wZxFl9CCENfM1F9axbCZzR794Gw/NQh/YbgHrxTYhZeUMI5e4pzTroIXXqZCuchYH4xQCCifdT3qoiiqFgezk39WLUy5dp1ZnREBxiU7LJl+juiyOO0EhJp7Rah2KLngNZKIyk30q/uKpcI8RprSfyqCYcimSFsXS6JBpt1kocuLFUxcIfWFC2QCKLWRtYqhnDhLidaIbcGstInB0oGenGFUGF3N8i+lQyhqzg8z5ALegH5GQ2Do01iqfzvivGAhqFmCDduJgLrV8VyBANtXSCckKuBZqBZaBhC4mKja7BOCU4JFPv0z2sO9ogUR9DlZmpfnyc/KjR7DCWldYYKvb8p3z7esh9p415hPxvCrmi6lt89XQknlLyk/TP0ahshlkJmjRSxzwGXf7PUMsMBmzew/fDVFNNf6USkN7+sGhtnCGmzQju0m12EeIVNHBbDHS7GZq/0YjeNiPRr8R1DiV1JOq/8LS2xnlVm0G3MsoTdrbpBlwJkBjS+5QWBDbs/YrAc96Ft+hOGcGeVAV2S+YzBZn8rRq/Ljxg2NsM+g3F8wrCw2aI7uVkPVp2rXCS1wmC1GXGA63u0p428x/Ufgz6a22wywgx01VNbDN4t2/7jFTgP/hhEFPc09I95/EvXaTIsDJKX9ApYk1Vbgte0CcMJWhBW1zTsW00Y7lBCZNW3wvGzCQPYC1sM/cE3BccaBgw5mNNajTXgmM+AIckgBqsxHxx7GzDEkFuyHHuDOZABQwoZpaq89kWBuagBg67a+pLlsvESMiYDhj20WVquCURQsGbAUEPzabk2A9bIDBigyjNdW261Q37dgAEqtdmuVYI1YxElPUlxa+9ZCe0O1mvGCbCo6bon6ZxGFP592EIuWtiu3QdQ5RefxwEI9nso6F7W6HzaQS8rhRKwLzC46CliWyFjGZycJkP22EczODlMhuvnjGRwc9YhOKGKriMZNm7O9OVg/vIZA7k4OiCKOmE8ksHZaWNMN2gUg7uzcEGJaPiPYnB4JhFzNnQMg8uzoZgzumMYnJ7RDYqdBYad4xtab8+smzPwxi1CkL87uGHM4P7uQJC/OblhykCZh2u8YPXdmIG6ifWGgu80mTFQ5umyInhJ0YxBeLuquAfuNZkwUH93/MCZMGDwetcyCO5aCAMGv3deuzhcd/cYzUCoF4/0a2ihesfGMhBis/mG1UMJgWRgmZcxD5UfNgp7QjHQ3X0CnxN4KX3ISxvBQNnKQT0MrXs4pHjLQLn1Areh8oZyIwZO6+l9/adsCEMzMNZMyYz+Kj327jXoGWhnRY31HsNo5YcH/VPz0DFQQbLJOCO18nK/fn3LS8Xw/JZXe57m56MGSqo6W2+HEUSxbbO6mt461ipPi2FqGZ/Sf2ECZs2aNWvWrAnpP7eQTBKA1VzFAAAAAElFTkSuQmCC"
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />
        <div className="flex items rounded-full bg-gray-100 p-2 ">
          <input
            type="text"
            className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            placeholder="search facebook"
          />
          <SearchIcon />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex flex-row space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="whitespace=nowrap font-semibold pr-3 ">
        Meshach Arinze
      </div>
      <ViewGridIcon className="icon" />
    </div>
  );
};

export default Header;
 