import { ExtractPropTypes } from "vue";

export const iconProps = {
  name: {
    type: String
  },
  color: {
    type: String
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>