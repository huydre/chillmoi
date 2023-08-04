import React from "react";
import getDetailMovie from "../../../../api/getDetailMovie";
import getDetailsTV from "../../../../api/getDetailsTV";
import getRecommendationMovie from "../../../../api/getRecommendationMovie";
import getRecommendationTV from "../../../../api/getRecommendationTV";
import getCreditsMovie from "../../../../api/getCreditsMovie";
import getCreditsTV from "../../../../api/getCreditsTV";
import DetailMovie from "../DetailMovie";
import Layout from "@/components/shared/Layout";
import DetailTV from "../DetailTV";
import getSimlilarMovie from "../../../../api/getSimlilarMovie"

interface pageProps {
  params: {
    id: string;
  };
}

const page: React.FC<pageProps> = async ({ params }) => {
  const id = params.id[1];
  const mediatype = params.id[0];

  const details = mediatype === "movie" ? await getDetailMovie(id) : await getDetailsTV(id);
  const recommendation = mediatype === "movie" ? await getRecommendationMovie(id) : getRecommendationTV(id);
  const credits = mediatype === "movie" ? await getCreditsMovie(id) : await getCreditsTV(id);
  const similar = await getSimlilarMovie(id);

  return (
    <Layout>
      {
        mediatype === "movie" ? <DetailMovie
        data={details}
        recommendation={recommendation}
        cast={credits}
        similar={similar}
      /> :
      <DetailTV data={details}
      recommendation={recommendation}
      cast={credits} />
      }
      
    </Layout>
  );
};

export default page;
