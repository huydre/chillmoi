import React from "react";
import LastestUpdate from "../shared/LastestUpdate";
import getPopularTVSeries from "../../../api/getPopularTVSeries"

export default async function PopularSection() {
  const data = await getPopularTVSeries();
  return <LastestUpdate data={data} title="Đang thịnh hành"/>;
}
