import React, { useEffect, useState } from "react";

import { DirectoryType } from "../../types/type";

const getRootId = (arr: DirectoryType[]) => {
  const roots = arr
    .map((item) => !item.parentId && item)
    .filter((item) => item) as DirectoryType[];
  return roots[0]?.id;
};

const recursive = (
  arr: DirectoryType[],
  parentId: string,
  node: HTMLElement
) => {
  let list = document.createElement("ul");
  let itemHTML: HTMLLIElement;

  const arrChildren: DirectoryType[] = arr
    .map((item) => {
      if (item.parentId === parentId) {
        return item;
      }
    })
    .filter((item) => item) as DirectoryType[];

  for (const item of arrChildren) {
    itemHTML = document.createElement("li");
    itemHTML.innerHTML = item.name;
    if (arrChildren.length > 0) {
      recursive(arr, String(item.id), itemHTML);
    }
    list.appendChild(itemHTML);
  }
  if (list.parentElement != null) {
    console.log("list.parentElement != null");
    itemHTML.appendChild(list);
  }

  if (node) {
    node.appendChild(list);
  }
  return;
};

const DirectoriesTree = () => {
  const [directories, setDirectories] = useState<DirectoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/directories");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      setDirectories(responseData);
      console.log("fetching data", responseData);
    };
    fetchData().catch((error) => {
      console.log("fetching error");
    });
  }, []);

  const rootId = String(getRootId(directories));
  console.log(rootId);

  recursive(
    directories,
    rootId,
    document.getElementById("tree") as HTMLDivElement
  );

  console.log("rendering directories tree");
  return (
    <div id="tree">
      <p>Folder Tree</p>
    </div>
  );
};

export default DirectoriesTree;
