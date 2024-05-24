
export default function Home() {
    return (<>
        <div className="grid grid-cols-12 bg-eastern-blue-300 p-6 gap-20 items-center">
            <img loading="lazy" className="col-start-3 col-span-2 w-100" src="logo.svg" />
            <div className="col-start-5 col-span-6 flex flex-col items-center justify-center gap-3">
                <h2 className="m-0 font-display text-5xl">Colabora con la red de proplayas</h2>
            </div>
        </div>
        <div className="p-2">
            <h1 className="font-heading text-3xl text-center">Ultimas publicaciones</h1>
        </div>
    </>);
}
