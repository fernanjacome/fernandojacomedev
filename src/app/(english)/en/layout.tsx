import PortfolioLayout, { portfolioMetadata, viewport } from "../../portfolio-layout";

export { viewport };
export const metadata = portfolioMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PortfolioLayout language="en">{children}</PortfolioLayout>;
}
