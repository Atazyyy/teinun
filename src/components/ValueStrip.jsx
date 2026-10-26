import { Truck, BadgeCheck, PackageCheck } from "lucide-react";

const ITEMS = [
  {
    icon: BadgeCheck,
    title: "Batik & tenun asli",
    desc: "Langsung dari pengrajin, tanpa perantara cetakan murahan.",
  },
  {
    icon: Truck,
    title: "Gratis ongkir 150rb+",
    desc: "Untuk semua kota di Jawa, hemat dan praktis.",
  },
  {
    icon: PackageCheck,
    title: "Kirim seluruh Indonesia",
    desc: "Dikemas rapi dengan bubble wrap dan dus tebal.",
  },
];

export default function ValueStrip() {
  return (
    <section className="border-y border-bark/10 bg-parchment">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 md:px-8">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex gap-4">
            <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-clay" />
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-sm leading-snug text-bark/60">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
