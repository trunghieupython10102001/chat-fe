import Icon from "@ant-design/icons";
import React from "react";
const IconSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.375 5.51953L15.9167 2.07422C15.5417 1.70508 15 1.5 14.5 1.5H6C4.875 1.5 4 2.40234 4 3.46875V20.5312C4 21.6387 4.875 22.5 6 22.5H18C19.0833 22.5 20 21.6387 20 20.5312V6.91406C20 6.42188 19.75 5.88867 19.375 5.51953ZM18.4583 6.46289C18.5417 6.54492 18.5833 6.66797 18.625 6.75H14.6667V2.85352C14.75 2.89453 14.875 2.93555 14.9583 3.01758L18.4583 6.46289ZM18 21.1875H6C5.625 21.1875 5.33333 20.9004 5.33333 20.5312V3.46875C5.33333 3.14062 5.625 2.8125 6 2.8125H13.3333V7.07812C13.3333 7.65234 13.75 8.0625 14.3333 8.0625H18.6667V20.5312C18.6667 20.9004 18.3333 21.1875 18 21.1875ZM12.7917 14.1328L14.9167 10.8105C15.125 10.4824 14.875 10.0312 14.4583 10.0312H14.2917C14.125 10.0312 13.9583 10.1543 13.875 10.2773C12.5833 12.2461 12.375 12.4512 12 13.3125C11.25 12 11.625 12.6562 10.0833 10.2773C10 10.1543 9.83333 10.0312 9.66667 10.0312H9.5C9.08333 10.0312 8.83333 10.4824 9.04167 10.8105L11.2083 14.1328L8.70833 17.8242C8.5 18.1523 8.75 18.5625 9.16667 18.5625H9.29167C9.45833 18.5625 9.625 18.4805 9.70833 18.3574C11.25 15.9785 11.5833 15.7734 12 14.9531C13.2917 17.291 13.8333 17.7422 14.25 18.3574C14.3333 18.4805 14.5 18.5625 14.6667 18.5625H14.8333C15.2083 18.5625 15.4583 18.1523 15.25 17.8242L12.7917 14.1328Z"
      fill="#6C778B"
    />
  </svg>
);

const XLSXIcon: React.FC = (props) => <Icon component={IconSvg} {...props} />;

export default XLSXIcon;