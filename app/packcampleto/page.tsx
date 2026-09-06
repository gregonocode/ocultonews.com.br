import Image from "next/image";
import Script from "next/script";
import { createElement } from "react";
import { Montserrat } from "next/font/google";
import logo from "../../public/logo oculto news.png";
import AccessButton from "./access-button";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function PackCompletoPage() {
  return (
    <main
      lang="pt-BR"
      className={`${montserrat.className} flex min-h-screen flex-1 flex-col items-center bg-[#363131] px-5 py-10 text-white sm:px-8 sm:py-14`}
    >
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <Image
          src={logo}
          alt="Oculto News"
          sizes="40px"
          className="h-10 w-10 rounded-lg object-cover shadow-lg"
        />

        <h1 className="mt-8 text-3xl leading-tight font-bold tracking-tight sm:mt-10 sm:text-5xl">
          PACK ARQUIVOS VORCARO
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-xl">
          veja o que tem no pack e como baixar agora
        </p>

        <Script src="https://fast.wistia.com/player.js" />
        <Script
          src="https://fast.wistia.com/embed/uxr74iom90.js"
          type="module"
        />
        <style>{`
          wistia-player[media-id='uxr74iom90']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/uxr74iom90/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        `}</style>
        <div
          role="region"
          aria-label="Vídeo de apresentação"
          className="mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-xl sm:mt-10"
        >
          {createElement("wistia-player", {
            "media-id": "uxr74iom90",
            aspect: "1.7777777777777777",
          })}
        </div>

        <AccessButton />
      </div>
    </main>
  );
}
