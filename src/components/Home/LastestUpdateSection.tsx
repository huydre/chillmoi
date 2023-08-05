import React from "react";
import LastestUpdate from "../shared/LastestUpdate";
import getNowPlaying from "../../../api/getNowPlaying";

export default async function LastestUpdateSection() {
  const data = await getNowPlaying();
  return <LastestUpdate data={data} title={"Mới cập nhật"} mediatype="movie" />;
}
