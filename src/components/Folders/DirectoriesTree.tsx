import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { directoriesActions } from "../../store/directories-slice.ts";

import { DirectoryType } from "../../types/type";

import LiItem from "./LiItem.tsx";

const getRootId = (arr: DirectoryType[]) => {
  const roots = arr
    .map((item) => !item.parentId && item)
    .filter((item) => item) as DirectoryType[];
  return roots[0]?.id;
};

const DirectoriesTree = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/directories");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      responseData.forEach((item) => {
        dispatch(directoriesActions.addDirectory(item));
      });
    };
    fetchData().catch((error) => {
      console.log("fetching error");
    });
  }, []);

  const directoriesData = useSelector(
    (state: { directoriesSlice: { directories: DirectoryType[] } }) =>
      state.directoriesSlice.directories
  ) as DirectoryType[];

  const rootId = String(getRootId(directoriesData));

  return (
    <div id="tree">
      <LiItem parentId={rootId} hide={true} />
    </div>
  );
};

export default DirectoriesTree;
