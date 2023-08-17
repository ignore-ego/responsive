import './globals.scss';

export const metadata = {
  title: 'Thread Affair',
  description: 'a HIGH quality thread',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
