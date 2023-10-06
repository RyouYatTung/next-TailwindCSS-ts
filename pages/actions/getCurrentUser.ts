import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    //? の役割は、オブジェクトのプロパティやメソッドへのアクセスを試みる前に、それらのオブジェクトが存在するかどうかを確認することです。つまり、session オブジェクトが存在しない場合、session.user も存在しない可能性があり、さらにsession.user.email も存在しない可能性がある場合に、エラーを発生させずにプロパティへのアクセスを試みることができます。
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
