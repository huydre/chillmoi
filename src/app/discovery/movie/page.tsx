import Discovery from "@/components/Discovery/Discovery";
import Layout from "@/components/shared/Layout";
import React from "react";
import getGenresMovie from "../../../../api/getGenresMovie";
import querystring from "querystring";
import getDiscoverMovie from "../../../../api/getDiscoverMovie";

interface pageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async ({ params, searchParams }: pageProps) => {
  const page = searchParams.page || "1";
  const genres = await getGenresMovie();

  const queryString = querystring.stringify(searchParams);

  const discover = await getDiscoverMovie(queryString);

  return (
    <Layout>
      <Discovery data={discover} genres={genres} mediatype={"movie"} title="Phim lẻ" />
    </Layout>
  );
};

export default page;
