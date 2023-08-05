"use client";
import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";

export interface CommentProps {
  data: any;
}

export default function Comment({ data }: CommentProps) {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleBtn = () => {
    setIsShowMore((prevState) => !prevState);
  };

  const timeCommented = (time: any) => {
    const currentDate = new Date();
    const targetTime = new Date(time);

    const timeDifferenceInMilliseconds = currentDate.valueOf() - targetTime.valueOf();

    // Chuyển đổi thời gian chênh lệch sang đơn vị giờ, phút, giây, ...
    const secondsDifference = Math.floor(timeDifferenceInMilliseconds / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30); // Giả sử 1 tháng = 30 ngày
    const yearsDifference = Math.floor(monthsDifference / 12); // Giả sử 1 năm = 12 tháng

    // Xây dựng chuỗi kết quả
    let timeDiffString = "";
    if (yearsDifference) {
      timeDiffString = yearsDifference + " năm";
    } else if (monthsDifference % 12) {
      timeDiffString = (monthsDifference % 12) + " tháng";
    } else if (daysDifference % 30) {
      timeDiffString = (daysDifference % 30) + " ngày";
    } else if (hoursDifference % 24) {
      timeDiffString = (hoursDifference % 24) + " giờ";
    } else if (minutesDifference % 60) {
      timeDiffString = (minutesDifference % 60) + " phút";
    } else if (secondsDifference % 60) {
      timeDiffString = (secondsDifference % 60) + " giây";
    }
    return timeDiffString + " trước";
  };

  return (
    <div className="flex space-x-4">
      <div>
        <Avatar
          name={data.author}
          showFallback
          src={`https://image.tmdb.org/t/p/w500${data.author_details.avatar_path}`}
        />
      </div>
      <div className="space-y-2">
        <div className="flex space-x-2 items-center">
          <p>{data.author}</p>
          <p className="text-sm text-gray-500">
            {timeCommented(data.created_at)}
          </p>
        </div>
        <p
          className={
            !isShowMore
              ? "line-clamp-3 text-gray-300 text-sm"
              : "text-gray-300 text-sm"
          }
        >
          {data.content}
        </p>
        { data.content.length > 200 && <button id="expandBtn" className="text-sm text-gray-400" onClick={toggleBtn}>
          {!isShowMore ? "Xem thêm..." : "Ẩn bớt"}
        </button>}
      </div>
    </div>
  );
}
