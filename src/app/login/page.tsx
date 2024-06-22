import { ButtonStyles } from "@/components/Button";
import Input from "@/components/Input";
import { ArrowLeftSVG } from "@/icons/arrow-left.svg";

async function loginUser(data: FormData) {
    "use server"
    console.log(Object.fromEntries(data));
}

export default function Login() {
    return (
        <div className="flex flex-col m-auto h-full justify-center w-64">
            <div className="flex flex-row mb-8">
                <h1 className="font-heading font-xl text-eastern-blue-600 flex-1 text-center text-3xl">Inicia Sesion</h1>
            </div>
            <form action={loginUser} className="flex flex-col gap-3 items-center">
                <Input type="email" name="email" required />
                <Input type="password" name="password" required />
                <button className={`${ButtonStyles.Fancy} mt-4 bg-eastern-blue-400 text-white`} type="submit">Iniciar Sesion</button>
                <a className="font-label text-eastern-blue-300">Olvide mi contraseña</a>
            </form>
        </div>
    )
}
