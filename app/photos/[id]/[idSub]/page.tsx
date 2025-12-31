import PhotoPage from "../../../../components/photoPage";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string, idSub: string }>;
}) {
  const p = await params
  console.log("params: ", p)
  const photoId = Number((p).idSub);
  console.log(`photos/${p.id}/${photoId}`)
  return <PhotoPage id={photoId} />;
}
