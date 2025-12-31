import { ContentPage } from "../../../../components";
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log(`photos/first/second`)
  return <ContentPage back="/photos/first" id='second' subPage='/photos/first/second/third' />;
}
