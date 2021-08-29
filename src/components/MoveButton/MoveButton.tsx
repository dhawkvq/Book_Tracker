import { FC, useState } from "react";
import { ReactComponent as UpArrow } from "../../images/arrow-up.svg";
import { KeyOfShelf } from "../../types/Shelf";
import { MultiSelectTooltip } from "../MultiSelectTooltip/MultiSelectTooltip";
import "./moveButton.css";

export const MoveButton: FC<{
  className?: string;
  onAnimationEnd?: (animationName: string) => void;
  onClick?: unknown;
  shelfOptions?: KeyOfShelf[];
  onOptionClick?: (value: KeyOfShelf) => void;
}> = ({
  onClick = () => {},
  className = "",
  onAnimationEnd = () => {},
  shelfOptions,
  onOptionClick = () => {},
  ...rest
}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="buttonContainer" {...rest}>
      {/* Tooltip */}
      {showOptions && (
        <MultiSelectTooltip
          options={shelfOptions}
          onOptionClick={onOptionClick}
        />
      )}
      <button
        className={`${className}`}
        onAnimationEnd={({ animationName }) => onAnimationEnd(animationName)}
        onClick={() => setShowOptions(!showOptions)}
      >
        <UpArrow />
      </button>
    </div>
  );
};
