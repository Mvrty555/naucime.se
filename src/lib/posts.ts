import { prisma } from "@/lib/prisma";

export async function getPublishedPosts() {
  try {
    return await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      select: { id: true, slug: true, title: true, excerpt: true, createdAt: true },
    });
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await prisma.post.findFirst({
      where: { slug, published: true },
    });
  } catch {
    return null;
  }
}
