import {SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-start p-8">
      <SignUp/>
    </div>
  );
}
