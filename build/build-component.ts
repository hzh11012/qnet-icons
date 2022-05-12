import fs from "fs";
import path from "path";
import prettier from "prettier";
import { convertCode, toCamelCase } from "./utils";

const svgSourcePath = path.resolve(__dirname, "../source");

const allIconMap: Record<string, string> = {};

const traverseFile = (dirPath: string) => {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  files.forEach((file) => {
    if (file.isFile()) {
      if (allIconMap[file.name]) {
        console.log("\x1b[33m 存在重复名称图标： \x1b[0m", file.name);
      }
      if (path.extname(file.name) !== ".svg") {
        console.log("\x1b[33m 非svg图标： \x1b[0m", file.name);
      } else {
        allIconMap[file.name] = path.join(dirPath, file.name);
      }
    } else if (file.isDirectory()) {
      traverseFile(path.join(dirPath, file.name));
    }
  });
};

const compile = (type: "react" | "vue") => {
  const iconsDir = path.resolve(__dirname, `../packages/${type}/src/icons`);
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  const generateCode = (svgFilePath: string) => {
    const content = fs.readFileSync(svgFilePath, { encoding: "utf8" });
    const fileName = path.basename(svgFilePath, ".svg");
    const extname = ".tsx";
    fs.writeFileSync(
      path.join(iconsDir, `${toCamelCase(fileName)}${extname}`),
      convertCode(type, fileName, content),
      { encoding: "utf8" }
    );
  };

  const exportCodeIntoMapFile = () => {
    const fileNames = fs.readdirSync(iconsDir);
    let fileContent = `
      /**
       * @file Export All Icons
       * @author Auto Generated by QnetIcons
       */
      `;
    fileNames.forEach((fileName) => {
      const name = path.basename(fileName, path.extname(fileName));
      fileContent += `export {default as ${name}} from './icons/${name}';\n`;
    });
    fs.writeFileSync(
      path.resolve(iconsDir, "../map.ts"),
      prettier.format(fileContent, {
        parser: "babel",
        tabWidth: 2
      }),
      { encoding: "utf8" }
    );
  };

  Object.values(allIconMap).forEach((filePath) => generateCode(filePath));

  exportCodeIntoMapFile();
};

traverseFile(svgSourcePath);
compile("react");