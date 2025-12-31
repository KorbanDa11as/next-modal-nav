import { ContentPage } from "../../../components";
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);
  console.log(`photos/first`)
  return <ContentPage id='first' subPage="/photos/first/second" />;
}
