import PortfolioLayout, { portfolioMetadata, viewport } from "../portfolio-layout";

export { viewport };
export const metadata = portfolioMetadata("es");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PortfolioLayout language="es">{children}</PortfolioLayout>;
}
