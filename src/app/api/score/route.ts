// src/app/api/score/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "data.json");

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    
    const totalScore = data.tasks
      .filter((task: any) => task.status === "completed")
      .reduce((sum: number, task: any) => sum + (task.exp || 0), 0);

    return NextResponse.json({ 
      success: true, 
      score: totalScore 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to calculate score" },
      { status: 500 }
    );
  }
}