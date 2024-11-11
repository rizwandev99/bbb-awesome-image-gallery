import { ImagesResults } from "@/models/Images";
import fetchImages from "@/lib/fetchImages";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};

export default async function Gallery({ topic = 'curated', page }: Props) {
  let url
  if (topic === "curated" && page) { // browsing beyond home
    url = `https://api.pexels.com/v1/curated?page=${page}`
  }else if(topic === "curated"){
    url = 'https://api.pexels.com/v1/curated'
  }
  else if(!page){ // 1st page of search results
    url = `https://api.pexels.com/v1/search?query=${topic}`
  }
  else{ // search result beyond 1st page
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
  }
 
  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images found</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
}
