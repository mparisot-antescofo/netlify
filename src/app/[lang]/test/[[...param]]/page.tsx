export default async function Page({params}: Readonly<{
  params: Promise<{
    param: string;
  }>;
}>) {
  const {param} = await params;
  return (
    <div>Hello {param}!</div>
  );
}