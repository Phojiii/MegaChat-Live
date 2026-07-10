import "./globals.css";

export const metadata = {
  title: "Mega Chat Live",
  description: "Make friends through your voice with Mega Chat Live."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-white font-sans text-[#181924] antialiased">{children}</body>
    </html>
  );
}
