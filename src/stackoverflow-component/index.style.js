const colorFiller = require('../utils/colorFiller')

const stackoverflowStyle = (margin, fill, textfill, shadow) => {
  return `      a{
    text-decoration: none;
    color:inherit;
    }
    .container{
    font-family: Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    line-height: 1.5;
    border:2px solid ${fill ? `#${fill}` : "#fafafa"};
    border-radius: 6px;
    background: ${fill ? colorFiller(fill) : "#fafafa"};
    padding: 24px 17px;
    max-width: 405px;
    margin: ${margin ? `${margin}` : "12px"};
    font-size: 13px;
    color: ${textfill ? `#${textfill}` : "#24292e"};
    box-shadow: ${shadow ? `${shadow}` : "0 2px 10px 3px rgb(0 0 0 / 0.2)"};
    }
    .section1{
    display: flex; align-items: center;
    justify-content: space-between;
    }
    .section1 .profile{
    display: flex;
    justify-content: space-around;
    }
    .section1 .userdetails{
    display: flex; flex-direction: column; margin-left: 12px
    }
    .section1 .userdetails .name {
    font-weight: 500; color: ${
      textfill ? `#${textfill}` : "#ef8236"
    }; font-size: 18px;
    }
    .section1 .userdetails .location{
    font-weight: 400; color: #586069; font-size: 12px
    }
    .section1 .image{
    width: 48px; height: 48px; border-radius: 50%;
    }
    .section1 .report{
    display: flex;
    font-size:12px;
    }
    .section1 .report .answers{
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .section1 .report .questions{
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .section1 .report .reached {
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .section1 .report .answers::after{
    content: "Answers"
    }
    .section1 .report .questions::after{
    content: "Questions"
    }
    .section1 .report .reached::after{
    content: "Profile views";
    white-space: nowrap;
    }
    .section2{
    margin-top: 12px; display: flex; justify-content: space-between; align-items: center;
    }
    .section2 .reputation{
    display: flex; flex-direction: column;
    }
    .section2 .reputation .text{
    font-size: 10px; font-weight: 500; color: ${
      textfill ? `#${textfill}` : "#586069"
    } ;
    }
    .section2 .reputation .value{
    font-weight: 600; color: ${
      textfill ? `#${textfill}` : "#211F1F"
    }; font-size: 30px; line-height: 1;
    }
    .section2 .badges{
    display: flex; flex-direction: column; margin-top: -4px;
    }
    .section2 .badges .text{
    font-size: 11px; font-weight: 500; color: ${
      textfill ? `#${textfill}` : "#586069"
    };
    }
    .section2 .badges .badgeicon{
    display: flex; flex-direction: row; font-weight: 400; color: #211F1F; font-size: 10px; margin-top: 2px;
    }
    .section2 .badges .badgeicon .gold {
    display: flex;
    min-width: 45px; text-align: center; padding: 4px 4px 4px 0px; background-color: #fff4d1; border: 1px solid #f1b600; border-radius: 5px
    }
    .section2 .badges .badgeicon .silver::before{
    content: '';
    margin: auto 10px;
    border-radius: 50%;
    background-color: #9e9e9e;
    height: 7.5px;
    width: 7.5px;
    }
    .section2 .badges .badgeicon .silver{
    display: flex;
    min-width: 45px; text-align: center; padding: 4px 4px 4px 0px; background-color: #e8e8e8; margin: 0 4px 0 4px; border: 1px solid #9a9c9f; border-radius: 5px;
    }
    .section2 .badges .badgeicon .gold::before{
    content: '';
    margin: auto 10px;
    border-radius: 50%;
    background-color: #FFC107;
    height: 7.5px;
    width: 7.5px;
    }
    .section2 .badges .badgeicon .bronze{
    display: flex;
    min-width: 45px; text-align: center; padding: 4px 4px 4px 0px; background-color: #f2e9e1; border: 1px solid #ab825f; border-radius: 5px;
    }
    .section2 .badges .badgeicon .bronze::before{
    content: '';
    margin: auto 10px;
    border-radius: 50%;
    background-color: #c68d79;
    height: 7.5px;
    width: 7.5px;
    }

    .dark-card{
        color:#f6f6f6;
        background-color:#2a2a2a;
        border:2px solid #2a2a2a;
    }
    .dark-text{
        color:white !important;
    }


    `;
};

module.exports = stackoverflowStyle;
