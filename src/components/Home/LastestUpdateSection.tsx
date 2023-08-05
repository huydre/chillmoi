import React from "react";
import LastestUpdate from "../shared/LastestUpdate";
import getNowPlaying from "../../../api/getNowPlaying";
import { Suspense } from "react";
import Loading from "../shared/loading";

export default async function LastestUpdateSection() {
  const data = await getNowPlaying();
  return (
    <Suspense fallback={<Loading/>}>
      <LastestUpdate data={data} title={"Mới cập nhật"} mediatype="movie" />
    </Suspense>
  );
}
