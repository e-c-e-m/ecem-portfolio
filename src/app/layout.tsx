import "./globals.css";

export const metadata = {
  title: "CONGRATS - YOU WON! 📱",
  description: "Personal portfolio by Ecem Öztürk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
