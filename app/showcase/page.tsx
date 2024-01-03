
export default function ShowcasePage() {
  return (
    <div className="text-white px-5">
      <h1 className="uppercase text-s my-16">My Showcase</h1>
      <div className="flex gap-10">
        <Project name="EasyDiscord" img="/projects/easy-discord.webp" link="https://github.com/FrancescoMaca/Easy-Discord" />
      </div>
    </div>
  )
}

function Project({name, img, link}: {name: string, img: string, link: string}) {
  return (
    <div className="relative flex flex-col w-full border-2 border-white rounded-xl p-5">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-white rounded-xl blur-md"/>
      <h2 className="text-xs">{name}</h2>
      <p className="my-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos at saepe, eum aliquid vero cum facere assumenda eaque similique ab magni, tempora id ipsam accusamus ea exercitationem, quo voluptates amet?
      </p>
      <div className="flex justify-between">
        <div className="flex justify-between">
          <a href={link} target="_blank">
            <img src={img} alt="project image" width={96} height={96} />
          </a>
        </div>
        <button className="self-end px-2 py-1 border-2 rounded-lg">
          <img src="/svg/github.svg" alt="github link" />
        </button>
      </div>
    </div>
  )
}