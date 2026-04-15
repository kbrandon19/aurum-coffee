import { urlFor } from "./lib/image";
import { getBeans } from "./lib/sanity";
import Image from "next/image";

export default async function Home() {
  const beans = await getBeans();

  return (
    <div>
      <h1>Aurum Coffee</h1>

      {beans.map((bean: any) => (
        <div key={bean._id}>
          <h2>{bean.name}</h2>
          <p>{bean.description}</p>
          <p>${bean.price.toFixed(2)}</p>
          {bean.image && (
            <Image
              src={urlFor(bean.image).width(400).url()}
              alt={bean.name}
              width={200}
              height={200}
            />
          )}{" "}
        </div>
      ))}
    </div>
  );
}
