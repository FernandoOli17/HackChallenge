"use client"

import { type HTMLMotionProps, motion as framerMotion } from "framer-motion"

type MotionDivProps = HTMLMotionProps<"div">

export const motion = {
  div: (props: MotionDivProps) => <framerMotion.div {...props} />,
}
