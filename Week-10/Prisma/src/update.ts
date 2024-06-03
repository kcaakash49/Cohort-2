import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });
}

updateUser("kcaakash1@gmail.com", { firstName: "leo", lastName: "Messi" });
