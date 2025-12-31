import { Modal } from "../../../components/modal/modal";

export default async function ModalLayout({ children }: { children: any }) {
  console.log("layout of Modal Root")
  return <div>
    <Modal>INTERCEPTED {children}</Modal>
  </div>
}
