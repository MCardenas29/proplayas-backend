
function BarButton() {
    return (
        <button type="button" className="">
            A
        </button>
    )
}

function Appbar() {
    return (
        <header className="grid grid-cols-12 min-h-14">
            <div className="col-span-10 col-start-2 flex flex-row items-center">
                <BarButton />
            </div>
        </header>
    )
}

export default Appbar;
