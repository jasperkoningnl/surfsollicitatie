import "./globals.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";

export const metadata = {
  title: "Jasper Koning · Sollicitatie Productowner Communicatiekanalen SURF",
  description:
    "Interactieve sollicitatie van Jasper Koning voor de rol van Productowner Communicatiekanalen bij SURF.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className="font-body bg-surf-bg text-surf-black antialiased">
        {children}
      </body>
    </html>
  );
}
