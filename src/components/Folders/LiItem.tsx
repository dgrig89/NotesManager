import React from "react";

import classes from "./LiItem.module.css";

import { DirectoryType } from "../../types/type";

import { useSelector } from "react-redux";

type PropsLi = { parentId: string; hide: boolean };

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
    <li
      className={`${classes.li} ${
        props.hide ? classes.hidden : classes.visible
      }`}
    >
      {
        (
          directoriesData.find(
            (item) => item.id === +props.parentId
          ) as DirectoryType
        )?.name
      }
      {arrChildren.length > 0 && (
        <ul>
          {arrChildren.map((item) => (
            <LiItem
              key={Math.random()}
              parentId={String(item.id)}
              hide={false}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default LiItem;
