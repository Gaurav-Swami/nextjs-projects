import "../global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "blue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "blue",
            padding: "1rem",
          }}
          className="bg-blue-300 p-4"
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
