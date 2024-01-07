import { NextResponse } from "next/server";

export function Success(response: Object) {
  return NextResponse.json({ status: 200, ...response }, { status: 200 });
}

export function Created(response: Object) {
  return NextResponse.json({ status: 201, ...response }, { status: 201 });
}

export function Forbidden(message: string) {
  return NextResponse.json({ status: 403, message }, { status: 403 });
}

export function InternalServerError() {
  return NextResponse.json(
    { status: 500, message: "Internal Server Error" },
    { status: 500 },
  );
}
