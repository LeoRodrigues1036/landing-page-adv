import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
