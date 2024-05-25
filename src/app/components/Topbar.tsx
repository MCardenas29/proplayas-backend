import NavigationButton from "./NavigationButton";
import TranslateButton from "./TranslateButton";

function Topbar() {
    return (
        <header className="grid grid-cols-12 min-h-14">
            <div className="col-span-10 col-start-2 flex flex-row items-center">
                <NavigationButton />
                <h1 className="text-2xl font-proplayas m-0 justify-self-stretch text-cebter m-auto">PROPLAYAS</h1>
                <TranslateButton />
            </div>
        </header>
    )
}

export default Topbar;
