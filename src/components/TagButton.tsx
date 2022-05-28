import { kebabCase } from "lodash";
import Link from "next/link";

//TODO

type Props = {
  tag: string;
};
export default function TagButton({ tag }: Props) {
  return (
    <>
      <Link
        href={"/posts/tags/[[...slug]]"}
        as={`/posts/tags/${kebabCase(tag)}`}
      >
        <a>{tag}</a>
      </Link>
    </>
  );
}
