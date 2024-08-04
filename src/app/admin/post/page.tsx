import prisma from "@/db";

export default async function Index(){
	let posts = await prisma.post.findMany();

	const convert = () => {
    const items = posts.map(post => ({
      id: post.id,
      title: post.title
    }));

    console.log(posts);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Titulo</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return convert();
}