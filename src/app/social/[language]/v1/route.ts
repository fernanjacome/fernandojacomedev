import { renderSocialImage } from "../../../social-card";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ language: "es" }, { language: "en" }];
}

export async function GET(_request: Request, { params }: { params: Promise<{ language: string }> }) {
  const { language } = await params;
  if (language !== "es" && language !== "en") return new Response(null, { status: 404 });
  return renderSocialImage(language);
}
