import { mkdir, copyFile } from "fs";
import { basename } from "path";
import * as kebabcase from "lodash.kebabcase";

import { groups } from "../dotfiles.json";

/**
 * update repo with local files
 */
interface Group {
  name: string;
  files: Array<string>;
}

groups.forEach(({ name, files }: Group) => {
  const dirName = kebabcase(name);
  mkdir(`./${dirName}`, { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Created directory: ${dirName}`);
  });
});
