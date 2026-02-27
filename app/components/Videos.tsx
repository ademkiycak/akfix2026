

import { fetchData } from "@/lib/api";
import VideoClient from "./clients/VideoClient";
import { BaseUrl } from "@/lib/baseurl";

export default async function Videos() {


const data = await fetchData<[]>(BaseUrl()+'/api/data/videos/main_videos.php');

  return <VideoClient data={data} />
}