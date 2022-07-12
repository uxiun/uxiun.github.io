import {useRouter} from "next/router"
export default function Query() {
  const router = useRouter()
  return <p>{router.query.query}と検索しました</p>
}