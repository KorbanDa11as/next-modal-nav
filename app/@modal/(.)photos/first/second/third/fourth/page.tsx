
import { ContentPage } from "../../../../../../../components";
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log(`photos/first/second/third/fourth INTERCEPTED`)
  return <ContentPage back="/photos/first/second/third" id='fourth' />;
}
