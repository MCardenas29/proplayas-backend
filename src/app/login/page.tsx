import { ButtonStyles } from "@/app/admin/ui/styles/Button";
import Input from "@/app/admin/ui/styles/Input";
import { PrismaClient } from "@prisma/client";

async function loginUser(data: FormData) {
    "use server"
    const prisma = new PrismaClient()
    const user = await prisma.user.findFirst({
        where: {
            email: data.get("email")?.toString()
        }
    })
    console.log(user)
}

export default function Login() {
    return (
        <div className="flex flex-col m-auto h-full justify-center w-64">
            <div className="flex flex-row mb-8">
                <h1 className="font-heading font-xl text-eastern-blue-600 flex-1 text-center text-3xl">Inicia Sesion</h1>
            </div>
            <form action={loginUser} className="flex flex-col gap-3 items-center">
                <Input placeholder="Email" type="email" name="email" required />
                <Input placeholder="Contraseña" type="password" name="password" required />
                <button className={`${ButtonStyles.Fancy} mt-4 bg-eastern-blue-400 text-white`} type="submit">Iniciar Sesion</button>
                <a className="font-label text-eastern-blue-300">Olvide mi contraseña</a>
            </form>
        </div>
    )
}
