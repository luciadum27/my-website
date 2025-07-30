import './globals.css';

export const metadata = {
  title: 'a letter away',
  description: 'an anxiety care site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}