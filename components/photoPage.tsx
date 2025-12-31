"use client"
import { useRouter } from "next/navigation";

export default function PhotoPage({
  id,
  next,
  subPage,
}: {
  id: string
  next?: string
  subPage?: string
}) {
  const router = useRouter()
  return <div className="card" style={{ display: "block", textAlign: "center" }}>{id}
    <div>
      <button style={{ backgroundColor: "white" }} onClick={router.back}>back </button>
      {subPage != null &&
        <button style={{ backgroundColor: "white" }} onClick={() => router.push(subPage)}>sub Page</button>
      }
      {next != null &&
        <button style={{ backgroundColor: "white" }} onClick={() => router.push(next)}>next Syb </button>
      }
    </div>
  </div>;


}

