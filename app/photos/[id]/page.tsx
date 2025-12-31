import Photo from "../../../components/photoPage";
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = ((await params).id);
  console.log(`photos/${id}`)
  const nextPhoto = Number(id) != 6 ? (Number(id) + 1) % 7 : 1
  return <Photo id={id} next={`/photos/${nextPhoto}`} subPage={`/photos/${id}/subPage/${nextPhoto}`} />;
}
