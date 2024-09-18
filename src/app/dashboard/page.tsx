import ItemCard from "@/app/ui/item-card/item";
import "./page.scss";

type Item = {
  id: string;
  content: string;
};
const items: Item[] = [
  {
    id: "1",
    content: "first item",
  },
  {
    id: "2",
    content: "second item",
  },
  {
    id: "3",
    content: "third item",
  },
  {
    id: "4",
    content: "4th item",
  },
  {
    id: "5",
    content: "5th item",
  },
];

export default function Page() {
  const itemCards = items.map((item) => (
    <ItemCard key={item.id}>{item.content}</ItemCard>
  ));

  return (
    <>
      <main className="main-container">
        <textarea
          className="textarea"
          name="main-textarea"
          id="main-textarea"
          cols={30}
          rows={10}
        ></textarea>
        <div className="item-container">
          {itemCards}
          <ItemCard>+</ItemCard>
        </div>
      </main>
    </>
  );
}
