import Gallery from "@/app/components/Gallery";

type Props = {
  params: {
    term: string;
  };
};

export function generateMetaData({ params: { term } }: Props) {
  return {
    title: `Results for ${term}`,
  };
}

export default function searchResults({ params: { term } }: Props) {
  return <Gallery topic={term} />;
}