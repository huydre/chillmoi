import React from "react";
import LastestUpdate from "../shared/LastestUpdate";
import getTrendingAll from "../../../api/getTrendingAll";

export default async function LastestUpdateSection() {
  const data = await getTrendingAll();
  return <LastestUpdate data={data} title={"Mới cập nhật"}/>;
}
