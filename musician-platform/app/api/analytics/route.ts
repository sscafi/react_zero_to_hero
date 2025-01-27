import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const session = await getServerSession()
  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const { event, metadata } = await request.json()

  const analyticsEvent = await prisma.analyticsEvent.create({
    data: {
      userId: session.user.id,
      event,
      metadata,
    },
  })

  return NextResponse.json(analyticsEvent)
}

export async function GET(request: Request) {
  const session = await getServerSession()
  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const events = await prisma.analyticsEvent.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    take: 100,
  })

  return NextResponse.json(events)
}

