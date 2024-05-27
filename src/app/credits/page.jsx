import Image from "next/image";

export default function Home() {

    const creditMembers = [
        {
            name: "Juan Vergara",
            pp: "/juan.jpg",
            role: "QA & Frontend Lead",
            url: "https://github.com/Korintios"
        },
        {
            name: "Juan Villalobos",
            pp: "/juanv.jpg",
            role: "Backend Lead",
            url: "https://github.com/Andremxsrs"
        },
        {
            name: "Ronny Valdelamar",
            pp: "/rony.jpg",
            role: "Frontend & Backend",
            url: "https://github.com/juanvillalobosnz"
        },
        {
            name: "Cristofer Mercado",
            pp: "/default.jpg",
            role: "Tester",
            url: null
        },
        {
            name: "Jason Cristanco",
            pp: "/default.jpg",
            role: "Tester",
            url: null
        }
    ]
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
           <h1 className="text-4xl uppercase font-bold">Proyecto Desarrollado Por</h1>
            <div className="flex gap-6 mt-20">
                {creditMembers.map((m, i) => {
                    return (
                        <a key={i} href={m.url} className="flex flex-col gap-2 items-center w-[200px]">
                            <Image alt="" src={m.pp} width={150} height={150} className="rounded-full h-[150px] object-cover"/>
                            <span className="text-2xl">{m.name}</span>
                            <span className="font-bold">{m.role}</span>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}