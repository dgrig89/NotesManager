import React from "react";

import classes from "./LiItem.module.css";

import { DirectoryType } from "../../types/type";

import { useSelector } from "react-redux";

type PropsLi = { parentId: string; hide: boolean };

const DirectoryItem = (props: PropsLi) => {
  const directoriesData = useSelector(
    (state: { directoriesSlice: { directories: DirectoryType[] } }) =>
      state.directoriesSlice.directories
  ) as DirectoryType[];

  const arrChildren: DirectoryType[] = (rootId) => {
    const children = directoriesData.map(item => item.parentId === rootId)
    .filter((item) => item) as DirectoryType[];
    
    return children.map(item => <DirectoryItem item = item /><ul>{arrayChildren(item.id)}</ul></DirectoyrItem>);
  }
  console.log(arrChildren);
  return (
    <li
      className={`${classes.li} ${
        props.hide ? classes.hidden : classes.visible
      }`}
    >
      {prop.children}
    </li>
  );
};

export default LiItem;
