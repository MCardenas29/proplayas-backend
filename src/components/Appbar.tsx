import MenuSvg from "@/icons/menu.svg";
import TranslateSvg from "@/icons/translate.svg";

function MenuButton() {
    return (
        <button type="button" className="">
            <MenuSvg />
        </button>
    )
}

function TranslateButton() {
    return (
        <button type="button" className="">
            <TranslateSvg />
        </button>
    )
}

function Appbar() {
    return (
        <header className="grid grid-cols-12 min-h-14">
            <div className="col-span-10 col-start-2 flex flex-row items-center">
                <MenuButton />
                <h1 className="text-2xl font-proplayas m-0 justify-self-stretch text-cebter m-auto">PROPLAYAS</h1>
                <TranslateButton />
            </div>
        </header>
    )
}

export default Appbar;
