export default function Detail({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
