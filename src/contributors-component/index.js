const contributorsStyle = require("./index.style");
const imgFetcher = require("../utils/imgFetcher");
const commitSVG = require("./commit.svg")
const contributorsComponent = async (data = {}) => {

  let {val,repoowner,reponame}=data;
let content=``;
let count=0;
  val.map((user)=>{  
    count++;   
    content=` <div><div class="contributor">
  <div class="profile">
    <img
      class="image"
      src="${user['author']['avatar_url']}"
      alt="Profile image"
    ></img>
    <div class="userdetails">
      <span class="name">
        <a target="_blank" href="">
          ${user['author']['login']}
        </a>
      </span>
      <span class="location"></span>
    </div>
  </div>
  <div class="report">
  <ul class="legend">
          <li style="background-color: #9be9a8"></li>
          <li style="background-color: #40c463"></li>
          <li style="background-color: #30a14e"></li>
          <li style="background-color: #216e39"></li>
      </ul>
    <span class="commits">${user.total}</span>
    ${commitSVG()}
  </div>
</div>
<div class="divider"></div>
</div> `+content});
return `
<svg xmlns="http://www.w3.org/2000/svg" width="450" height="${50+46*count}">
<style>${contributorsStyle()}</style>
<foreignObject width="450" height="${50+46*count}">
<div class="container" xmlns="http://www.w3.org/1999/xhtml">
<div class="header">
      <div class="repo">
        <img
          class="image"
          src="https://static.thenounproject.com/png/368566-200.png"
          alt="Profile image"
        ></img>
        <div class="repo-details">
          <span class="name">
            <a  href="">
                ${reponame} Contributors
            </a>
          </span>
        </div>
      </div>
      <div class="github-icon">
              <img
          class="image"
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt="Profile image"
        ></img>
      </div>
    </div>
    ${content}    
     </div>
      </foreignObject>
      </svg>
      `;
}
module.exports=contributorsComponent;