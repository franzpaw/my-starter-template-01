import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-start p-8">
      <SignIn/>
    </div>
  );
}
