/**
 * ?SampleComponent Component
 */

import { FC } from "react";
import * as cn from "./SampleComponentStyles";

export type SampleComponentProps = {
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
 * Description of SampleComponent component displayed in Storybook
 */

const SampleComponent: FC<SampleComponentProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>SampleComponent</span>
    </div>
  );
};

export default SampleComponent;
