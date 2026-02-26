

import { fetchData } from "@/lib/api";
import VideoClient from "./clients/VideoClient";

export default async function Videos() {


const data = await fetchData<[]>('https://www.akfix.com/api/data/videos/main_videos.php');

  return <VideoClient data={data} />
}