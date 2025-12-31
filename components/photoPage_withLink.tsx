"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PhotoPage({
  id,
  next,
  back,
  subPage,
}: {
  id: string
  next?: string
  back?: string
  subPage?: string
}) {
  const router = useRouter()
  return <div className="card" style={{ display: "block", textAlign: "center" }}>{id}
    <div>
      {back ?
        <button style={{ backgroundColor: "white" }} >
          <Link replace href={back} style={{ backgroundColor: "white" }} onNavigate={() => {
            console.log("onNavigate triggered in", `${id}`, 'for back')
            router.back()
          }} > back </Link>
        </button>
        :
        <button style={{ backgroundColor: "white" }} onClick={router.back}>back </button>
      }
      {subPage != null &&
        <button>
          <Link href={subPage} style={{ backgroundColor: "white" }} > Subpage </Link>
        </button>
      }
      {next != null &&
        <Link href={next} style={{ backgroundColor: "white" }} >next syb </Link>
      }
    </div>
  </div>;


}

