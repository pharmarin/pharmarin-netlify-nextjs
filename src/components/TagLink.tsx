import Link from "next/link";
import { TagType } from "../lib/tagsRepo";

type Props = {
  tag: TagType;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
      <a>{"#" + tag.name}</a>
    </Link>
  );
}
