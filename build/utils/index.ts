import convertReact from "./template-react";

/**
 * svg代码转化成 'react' | 'vue' 对应代码
 * **/
export const convertCode = (
  type: "react" | "vue",
  fileName: string,
  fileContent: string
): string => {
  switch (type) {
    case "react":
      return convertReact(fileName, fileContent);
    case "vue":
      return "";
    default:
      return "";
  }
};

/**
 * 转驼峰命名
 * **/
export const toCamelCase = (name: string) => {
  return name
    .split("-")
    .map((str: string) => str.charAt(0).toUpperCase() + str.substring(1))
    .join("");
};
