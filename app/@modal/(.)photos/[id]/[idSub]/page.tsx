import PhotoPage from "../../../../../components/photoPage";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string, idSub: string }>;
}) {
  const p = await params
  console.log("params: ", p)
  const photoId = (p).idSub;
  console.log(`photos/${p.id}/${photoId}`)

  const next = photoId + 1
  return <PhotoPage id={photoId} subPage={`/photos/${p.id}/${p.idSub}/${next}`} />;
}
