import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,500&family=Kaushan+Script&family=Source+Sans+Pro:wght@600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo.png" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Prompay",
  keywords: "learn and earn, online money",
  description:
    "Test your Ability with our online Exam and earn if you pass or learn if you fail.",
};
export default Meta;
