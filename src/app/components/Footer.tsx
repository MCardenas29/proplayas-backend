import { FacebookSVG } from "@/icons/facebook.svg";
import { Icon as IconInterface } from "@/icons/icon";
import { InstagramSVG } from "@/icons/instagram.svg";
import { LinkedInSVG } from "@/icons/linkedin.svg";
import { ComponentType } from "react";

function SocialLink({ route, Icon }: { route: string, Icon: ComponentType<IconInterface> }) {
    return <a className="select-none" href={route}><Icon /></a>
}
function Footer() {
    return (
        <footer className="grid grid-cols-12 p-3 text-black">
            <div className="col-start-2 col-span-10 flex flex-row items-center justify-between">
                <span className="font-label text-sm">© 2022 RedIberoamericana de Gestion y Certificacion de Playas (PROPLAYAS)</span>
                <div className="flex flex-row gap-2">
                    <SocialLink route="#" Icon={FacebookSVG} />
                    <SocialLink route="#" Icon={InstagramSVG} />
                    <SocialLink route="#" Icon={LinkedInSVG} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
