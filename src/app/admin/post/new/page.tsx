import prisma from "@/db";

async function newPost(info: FormData){
	"use server"
	const post = await prisma.post.create({
		data: {
			title: info.get("title")?.toString()
		}
	})
	console.log(post)
}

export default function New(){
	return (
		<div>	
			<span>El post mas malote</span>
			<form action={newPost}>
				<input type="text" placeholder="Titulo" name="title" required />
				<button type="submit">Crear</button>
			</form>
		</div>
	)
}