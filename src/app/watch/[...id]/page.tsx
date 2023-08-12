import Layout from "@/components/shared/Layout";
import React from "react";
import WatchMovieSection from "../WatchMovieSection";
import WatchTvSection from "../WatchTvSecton";
import getDetailMovie from "../../../../api/getDetailMovie";
import getRecommendationMovie from "../../../../api/getRecommendationMovie";
import getDetailsTV from "../../../../api/getDetailsTV";
import getRecommendationTV from "../../../../api/getRecommendationTV";
import getEpisodeDetails from "../../../../api/getEpisodeDetails";
import getDetailsSeasons from "../../../../api/getDetailsSeasons";
import getReviewsMovie from "../../../../api/getReviewsMovie";
import getReviewsTV from "../../../../api/getReviewsTV";
import getSimlilarMovie from "../../../../api/getSimlilarMovie";
import getSimlilarTV from "../../../../api/getSimlilarTV";

interface pageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ params, searchParams }: pageProps) => {
  const id = params.id[1];
  const mediatype = params.id[0];

  const details =
    mediatype === "movie" ? await getDetailMovie(id) : await getDetailsTV(id);
  const recommendation =
    mediatype === "movie"
      ? await getRecommendationMovie(id)
      : await getRecommendationTV(id);
  const episodeDetails =
    mediatype === "tv" &&
    (await getEpisodeDetails(id, searchParams.season, searchParams.episode));

  const promises =
    mediatype === "tv" &&
    details.seasons.map((season: any, index: number) =>
      getDetailsSeasons(id, season.season_number)
    );
  const seasonsDetails = mediatype === "tv" && (await Promise.all(promises));

  const reviews =
    mediatype === "movie" ? await getReviewsMovie(id) : await getReviewsTV(id);

  const similar =
    mediatype === "movie"
      ? await getSimlilarMovie(id)
      : await getSimlilarTV(id);

  return (
    <Layout>
      {mediatype === "movie" ? (
        <WatchMovieSection
          id={id}
          data={details}
          recommend={recommendation}
          reviews={reviews}
          similar={similar}
        />
      ) : (
        <WatchTvSection
          id={id}
          data={details}
          recommend={recommendation}
          episodeDetails={episodeDetails}
          seasonsDetails={seasonsDetails}
          reviews={reviews}
          similar={similar}
        />
      )}
    </Layout>
  );
};

export default Page;
