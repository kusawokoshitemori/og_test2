export const config = { runtime: "edge" };
import { ImageResponse } from "@vercel/og";

export default function handler() {
  return new ImageResponse(<div>Hello</div>, { width: 1200, height: 630 });
}
