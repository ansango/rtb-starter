import { FC } from "react";
import * as cn from "./ButtonStyles";

export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  kind?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Class Name override
   */
  className?: string;
};

/**
 * Primary UI component for user interaction
 */

const Button: FC<ButtonProps> = ({
  kind = "secondary",
  size = "medium",
  label,
  className,
  ...props
}) => {
  const mode = `${cn.kind[kind]} ${cn.size[size]}`;
  const styles = className ?? mode;

  return (
    <button type="button" className={styles} {...props}>
      {label}
    </button>
  );
};

export default Button;
