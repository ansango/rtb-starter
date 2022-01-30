/**
 * ?Sample Component
 */

import { FC } from "react";
import * as cn from "./SampleStyles";

export type SampleProps = {
  /**
   * Description of options in Storybook
   */
  option?: "option__one" | "option__two" | "option__three";
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
 * Description of Sample component displayed in Storybook
 */

const Sample: FC<SampleProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Sample</span>
    </div>
  );
};

export default Sample;
