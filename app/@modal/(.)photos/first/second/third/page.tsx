
import { ContentPage } from "../../../../../../components";
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log(`photos/first/second/third INTERCEPTED`)
  return <ContentPage back="/photos/first/second" id='third' subPage="/photos/first/second/third/fourth" />;
}
