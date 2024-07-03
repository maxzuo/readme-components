const createComponent = require("../src/createComponent");
const componentNotFound = require("../src/component-not-found");
module.exports = async (req, res) => {
  const {
    component,
    skill,
    value,
    design,
    margin,
    fill,
    duration,
    role,
    company,
    logo,
    text,
    location,
    stackoverflowid,
    theme,
    textfill,
    animation,
    repoowner,
    reponame,
    svgfill,
    desc,
    scale,
    shadow,
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  if (component && req.query) {
    let createcomponent = await createComponent(component, {
      skill,
      value,
      design,
      margin,
      fill,
      duration,
      role,
      company,
      logo,
      text,
      location,
      stackoverflowid,
      theme,
      textfill,
      animation,
      repoowner,
      reponame,
      svgfill,
      desc,
      scale,
      shadow,
    });
    res.send(createcomponent);
  } else {
    res.send(componentNotFound());
  }
};
