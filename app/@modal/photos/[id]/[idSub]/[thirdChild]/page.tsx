import PhotoPage from "../../../../../components/photoPage";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string, idSub: string, thirdChild: string }>;
}) {
  const p = await params
  console.log("params: ", p)
  const photoId = (p).thirdChild;
  console.log(`photos/${p.id}/${photoId}`)
  return <PhotoPage id={photoId} />;
}
