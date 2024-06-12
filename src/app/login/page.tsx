import { Button, ButtonStyle } from "@/components/Button";
import Input from "@/components/Input";
import ArrowLeftSvg from "@/icons/arrow-left.svg";

async function loginUser(data: FormData) {
    "use server"
    console.log(Object.fromEntries(data));
}

export default function Login() {

    return (
        <div className="flex flex-row gap-3 h-full">
            <div className="flex flex-col justify-center items-end w-4/12 bg-center bg-cover bg-turtle">
                <h2 className="text-4xl font-display mix-blend-luminosity py-3 px-5 w-fit text-white bg-avocado-500 rounded-l-2xl">Bienvenido!</h2>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex flex-col m-auto">
                    <div className="flex flex-col">
                    </div>
                    <div className="flex flex-row relative">
                        <div className="absolute top-0 bottom-0 -left-4 flex flex-col justify-center">
                            <button type="button" className="text-eastern-blue-600">
                                <ArrowLeftSvg />
                            </button>
                        </div>
                        <h1 className="font-heading font-xl text-eastern-blue-600 flex-1 text-center text-3xl">Inicia Sesion</h1>
                    </div>
                    <form action={loginUser} className="flex flex-col gap-2 items-center">
                        <Input type="email" name="email" required />
                        <Input type="password" name="password" required />
                        <Button styleType={ButtonStyle.FANCY} type="submit">Iniciar Sesion</Button>
                        <a className="font-label text-eastern-blue-300">Olvide mi contraseña</a>
                    </form>
                </div>
            </div>
        </div>
    )
}
