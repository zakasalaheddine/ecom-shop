import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const { isAuthenticated } = await auth()
  if (isAuthenticated) {
    redirect('/admin')
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignIn />
    </div>
  )
}