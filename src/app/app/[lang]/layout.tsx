import type {ReactNode} from "react";

export default async function Layout({
                                       children,
                                       params,
                                     }: Readonly<{
  children: ReactNode;
  params: Promise<Record<string, string | string[] | undefined>>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang as string}>
    <body>
          {children}
    </body>
    </html>
  );
}