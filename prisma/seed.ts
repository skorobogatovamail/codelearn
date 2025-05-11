import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
    },
  });

  const course = await prisma.course.upsert({
    where: { title: "JavaScript Essentials" },
    update: {},
    create: {
      title: "JavaScript Essentials",
      description: "Master the core concepts of JavaScript programming",
      duration: "20 hours",
      level: "Intermediate",
      image: "/placeholder.svg?height=400&width=800",
      modules: {
        create: [
          {
            title: "JavaScript Basics",
            description: "Introduction to JavaScript syntax and fundamentals",
            progress: 100,
            lectures: {
              create: [
                {
                  title: "Introduction to JavaScript",
                  duration: "15 min",
                  completed: true,
                  type: "video",
                },
                {
                  title: "Variables and Data Types",
                  duration: "25 min",
                  completed: true,
                  type: "text",
                },
              ],
            },
          },
          {
            title: "Functions and Objects",
            description: "Working with functions, objects, and arrays",
            progress: 75,
            lectures: {
              create: [
                {
                  title: "Functions in JavaScript",
                  duration: "30 min",
                  completed: true,
                  type: "text",
                },
                {
                  title: "Objects and Properties",
                  duration: "25 min",
                  completed: true,
                  type: "interactive",
                },
              ],
            },
          },
        ],
      },
    },
  });
  console.log({ alice, bob, course });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
