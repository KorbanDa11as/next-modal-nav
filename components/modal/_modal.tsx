'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModalNav } from './useModalNav';

export default function Modal({ children }: { children: React.ReactNode }) {
  const modalRouter = useModalNav()
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  useEffect(() => {

    return () => {
      console.log("unmount modal")
      dialogRef.current?.close()
    }
  }, [modalRouter.isOpen])

  useEffect(() => {
    addEventListener("popstate", () => {
      console.log("popstate triggered!")
    })
  }, [])
  return createPortal(
    <div >
      <div className="modal-backdrop">
        <dialog ref={dialogRef} className="modal" onClose={modalRouter.close} open={modalRouter.isOpen}>
          {children}
          <button onClick={modalRouter.close} className="close-button" />
        </dialog>
      </div></div >,
    document.getElementById('modal-root')!
  );
}

