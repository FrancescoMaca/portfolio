import Image from "next/image";

export function EditorLoadingState() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-editor">
      <Image src="/svg/ide/loading.svg" className="animate-spin text-accent" alt={"Loading..."} width={20} height={20}/>
    </div>
  );
}
