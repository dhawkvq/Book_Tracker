import { FC } from "react";
import "./message.css";

export const SearchMessage: FC<{ queryError?: boolean }> = ({ queryError }) => (
  <div className="messageContainer">
    {queryError ? (
      <>
        <p>
          <b>OOF</b>, I didn't find anything
        </p>
        <span>🤷‍♀️</span>
      </>
    ) : (
      <>
        <p>
          Wont know what you're gonna get till you <b>search</b> for it....
        </p>
        <span>🚀</span>
      </>
    )}
  </div>
);
