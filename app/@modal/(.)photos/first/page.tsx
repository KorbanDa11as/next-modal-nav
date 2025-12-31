import { ContentPage } from "../../../../components";
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log(`photos/first INTERCEPTED`)
  return <ContentPage id='first' subPage="/photos/first/second" />;
}
