import "./globals.css"; // your global styles including font-face and body styles

export const metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-yujisyuku antialiased">
        {children}
      </body>
    </html>
  );
}