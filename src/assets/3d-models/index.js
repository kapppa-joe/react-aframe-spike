// const fs = require("fs/promises");
// fs.readdir(__dirname).then((files) => {
//   const glbFiles = files.filter((filename) => filename.endsWith(".glb"));
//   glbFiles.map((filename) => {
//     console.log(`export const ${filename.replace(".glb", "").toLowerCase} `);
//   });
// });

const fileList = require.context(__dirname, false, /\.glb$/);

function importAll(fileList) {
  let models = {};
  fileList.keys().forEach((item, index) => {
    models[item.replace(".glb", "").replace("./", "").toLowerCase()] =
      fileList(item);
  });
  return models;
}

export default importAll(fileList);
