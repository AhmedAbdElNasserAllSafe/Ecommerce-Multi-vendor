import CardElement from "../card";
import MainTitle from "../title";

export default function FeatureProducts() {
  let items = () => {
    let item;
    let arr = [];
    for (let i = 0; i < 10; i++) {
      item = (
        <CardElement
          customCard={i == 0 ? true : null}
          cardClass={`items-center p-3 ${i == 0 ? "row-span-2 col-span-2" : null} !rounded-0`}
          title={"HelloCard"}
          titleClass={"font-bold"}
          imgParentClass={`${i == 0 ? "!w-[60%] h-full" : null} pe-3`}
          imgClass={` ${i == 0 ? "!w-full" : null} w-4/5`}
          p={"$250"}
          pClass={"font-bold"}
          isHorizontal={true}
          img={"https://picsum.photos/200"}
        />
      );
      arr.push(item);
    }
    console.log("arr: ", arr);
    return arr;
  };
  return (
    <section className="featureProducts">
      <MainTitle
        text={"Feature Products"}
        className={"text-center text-2xl font-bold"}
      />
      <div className="grid grid-cols-4 gap-8">{items()}</div>
    </section>
  );
}
