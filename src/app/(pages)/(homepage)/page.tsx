import Link from "next/link";
import { APP_URL } from "@/app/constants/urls";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={APP_URL.PROTECTED}>GO TO PROTECTED PAGE</Link>
    </>
  );
}
