type PageParams = {
  params: {
    slug: string[];
  };
};
export default async function CursosPage({ params }: PageParams) {
  return (
    <div>
      <h1>Cursos</h1>
      <p>{params.slug.join('/')}</p>
    </div>
  );
}
