import React from "react";

import { DirectoryType } from "../../types/type";

import { useSelector } from "react-redux";

type PropsLi = { parentId: string };

const LiItem = (props: PropsLi) => {
  const directoriesData = useSelector(
    (state: { directoriesSlice: { directories: DirectoryType[] } }) =>
      state.directoriesSlice.directories
  ) as DirectoryType[];

  const arrChildren: DirectoryType[] = directoriesData
    .map((item) => {
      if (item.parentId === props.parentId) {
        return item;
      }
    })
    .filter((item) => item) as DirectoryType[];

  console.log(arrChildren);
  return (
    <ul>
      <li>
        {
          (
            directoriesData.find(
              (item) => item.id === +props.parentId
            ) as DirectoryType
          )?.name
        }
        {arrChildren.length > 0 &&
          arrChildren.map((item) => (
            <LiItem key={Math.random()} parentId={String(item.id)} />
          ))}
      </li>
    </ul>
  );
};

export default LiItem;
