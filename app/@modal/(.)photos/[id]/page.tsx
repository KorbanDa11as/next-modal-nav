import PhotoPage from "../../../../components/photoPage";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id
  const next = photoId + 1
  return <PhotoPage id={photoId} next="/photos/2" subPage={`/photos/${photoId}/${next}`} />
}
