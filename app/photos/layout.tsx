import { Modal } from "../../components/modal/modal"

export default async function PhotoLayout({ children }: { children: any }) {
  console.log("layout of deeplinked Root")

  return <div >
    <Modal>
      DEEPLINKED
      {children}</Modal>
  </div>
}
