

import { fetchData } from "@/lib/api";
import VideoClient from "./clients/VideoClient";

export default async function Videos() {


const data = await fetchData<[]>('http://akfix.akfix.com.tr/api/data/videos/main_videos.php');

  return <VideoClient data={data} />
}