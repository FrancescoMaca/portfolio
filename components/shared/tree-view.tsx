"use client"
import React, { useRef } from "react";
import TreeEntry from "./tree-entry";

export default function TreeView() {

	const menuRef = useRef<HTMLDivElement>(null);
	const collapsedMenuRef = useRef<HTMLDivElement>(null);

	function toggleTreeView() {

		if (!menuRef.current || !collapsedMenuRef.current) {
			return
		}
		
		menuRef.current.classList.toggle('hidden')
		collapsedMenuRef.current.classList.toggle('hidden')
	}

  return (
		<>
			<div ref={collapsedMenuRef} className="flex flex-col min-w-fit w-full h-full border-r-2 border-light-gray bg-dark-gray text-base text-white select-none z-10 hidden">
				<div className="select-none hover:cursor-pointer m-2" onClick={toggleTreeView}>
					<img src="./svg/ide/explorer.svg" alt="explorer icon" width={40} height={40}/>
				</div>
				<div className="select-none hover:cursor-pointer m-2">
					<img src="./svg/ide/extension.svg" alt="explorer icon" width={40} height={40}/>
				</div>
				<div className="select-none hover:cursor-pointer m-2">
					<img src="./svg/ide/search.svg" alt="explorer icon" width={40} height={40}/>
				</div>
			</div>
			<div ref={menuRef} className="flex flex-col min-w-fit w-full h-full border-r-2 border-light-gray bg-dark-gray text-base text-white select-none z-10">
				<div className="flex flex-col w-full h-full px-5 py-3 overflow-hidden">
					<div className="flex justify-between items-center mb-5">
						<h3 className="serif uppercase">Explorer</h3>
						<h3 className="select-none hover:cursor-pointer ml-16" onClick={toggleTreeView}>
							<svg width="20" height="5" viewBox="0 0 33 5" fill="none">
								<path
									d="M2.7749 0.154785C3.0516 0.154785 3.31201 0.207682 3.55615 0.313477C3.80843 0.419271 4.02409 0.565755 4.20312 0.75293C4.3903 0.940104 4.53678 1.15983 4.64258 1.41211C4.74837 1.65625 4.80127 1.92074 4.80127 2.20557C4.80127 2.48226 4.74837 2.74268 4.64258 2.98682C4.53678 3.23096 4.3903 3.44661 4.20312 3.63379C4.02409 3.81283 3.80843 3.95524 3.55615 4.06104C3.31201 4.16683 3.0516 4.21973 2.7749 4.21973C2.49007 4.21973 2.22559 4.16683 1.98145 4.06104C1.7373 3.95524 1.52165 3.81283 1.33447 3.63379C1.15544 3.44661 1.01302 3.23096 0.907227 2.98682C0.801432 2.74268 0.748535 2.48226 0.748535 2.20557C0.748535 1.92074 0.801432 1.65625 0.907227 1.41211C1.01302 1.15983 1.15544 0.940104 1.33447 0.75293C1.52165 0.565755 1.7373 0.419271 1.98145 0.313477C2.22559 0.207682 2.49007 0.154785 2.7749 0.154785ZM16.52 0.154785C16.7967 0.154785 17.0571 0.207682 17.3013 0.313477C17.5535 0.419271 17.7692 0.565755 17.9482 0.75293C18.1354 0.940104 18.2819 1.15983 18.3877 1.41211C18.4935 1.65625 18.5464 1.92074 18.5464 2.20557C18.5464 2.48226 18.4935 2.74268 18.3877 2.98682C18.2819 3.23096 18.1354 3.44661 17.9482 3.63379C17.7692 3.81283 17.5535 3.95524 17.3013 4.06104C17.0571 4.16683 16.7967 4.21973 16.52 4.21973C16.2352 4.21973 15.9707 4.16683 15.7266 4.06104C15.4824 3.95524 15.2668 3.81283 15.0796 3.63379C14.9006 3.44661 14.7581 3.23096 14.6523 2.98682C14.5465 2.74268 14.4937 2.48226 14.4937 2.20557C14.4937 1.92074 14.5465 1.65625 14.6523 1.41211C14.7581 1.15983 14.9006 0.940104 15.0796 0.75293C15.2668 0.565755 15.4824 0.419271 15.7266 0.313477C15.9707 0.207682 16.2352 0.154785 16.52 0.154785ZM30.2651 0.154785C30.5418 0.154785 30.8022 0.207682 31.0464 0.313477C31.2987 0.419271 31.5143 0.565755 31.6934 0.75293C31.8805 0.940104 32.027 1.15983 32.1328 1.41211C32.2386 1.65625 32.2915 1.92074 32.2915 2.20557C32.2915 2.48226 32.2386 2.74268 32.1328 2.98682C32.027 3.23096 31.8805 3.44661 31.6934 3.63379C31.5143 3.81283 31.2987 3.95524 31.0464 4.06104C30.8022 4.16683 30.5418 4.21973 30.2651 4.21973C29.9803 4.21973 29.7158 4.16683 29.4717 4.06104C29.2275 3.95524 29.0119 3.81283 28.8247 3.63379C28.6457 3.44661 28.5033 3.23096 28.3975 2.98682C28.2917 2.74268 28.2388 2.48226 28.2388 2.20557C28.2388 1.92074 28.2917 1.65625 28.3975 1.41211C28.5033 1.15983 28.6457 0.940104 28.8247 0.75293C29.0119 0.565755 29.2275 0.419271 29.4717 0.313477C29.7158 0.207682 29.9803 0.154785 30.2651 0.154785Z"
									fill="white"
								/>
							</svg>
						</h3>
					</div>
					<TreeEntry
						title="FRANCESCO'S CODE CHRONACLES"
						icon={"./svg/arrow.svg"}
						isDirectory
						isRootDirectory
					>
						<TreeEntry
							title=".next"
							icon={"./svg/folder/next.svg"}
							isDirectory
						></TreeEntry>
						<TreeEntry title="app" icon={"./svg/folder/app.svg"} isDirectory>
							<TreeEntry
								title="favicon.ico"
								icon={"./svg/favicon.svg"}
								isClickable
							></TreeEntry>
							<TreeEntry
								title="global.css"
								icon={"./svg/css.svg"}
								isClickable
							></TreeEntry>
							<TreeEntry
								title="layout.tsx"
								icon={"./svg/react.svg"}
								isClickable
							></TreeEntry>
							<TreeEntry
								title="page.tsx"
								icon={"./svg/react.svg"}
								isClickable
							></TreeEntry>
						</TreeEntry>
						<TreeEntry
							title="components"
							icon={"./svg/folder/node.svg"}
							isDirectory
						>
							<TreeEntry
								title="home-page.tsx"
								icon={"./svg/react.svg"}
								isLink
								isClickable
							></TreeEntry>
							<TreeEntry
								title="project-page.tsx"
								icon={"./svg/react.svg"}
								isLink
								isClickable
							></TreeEntry>
							<TreeEntry
								title="contact-page.tsx"
								icon={"./svg/react.svg"}
								isLink
								isClickable
							></TreeEntry>
						</TreeEntry>
						<TreeEntry
							title="node_modules"
							icon={"./svg/folder/node.svg"}
							isDirectory
						></TreeEntry>
						<TreeEntry
							title="public"
							icon={"./svg/folder/public.svg"}
							isDirectory
						></TreeEntry>
						<TreeEntry
							title="scripts"
							icon={"./svg/folder/script.svg"}
							isDirectory
						></TreeEntry>
						<TreeEntry
							title="styles"
							icon={"./svg/folder/css.svg"}
							isDirectory
						></TreeEntry>
						<TreeEntry
							title="eslintrc.json"
							icon={"./svg/eslint.svg"}
						></TreeEntry>
						<TreeEntry title=".gitignore" icon={"./svg/git.svg"}></TreeEntry>
						<TreeEntry title="jsconfig.json" icon={"./svg/json.svg"}></TreeEntry>
						<TreeEntry
							title="LICENSE"
							icon={"./svg/contributing.svg"}
						></TreeEntry>
						<TreeEntry title="next.config.js" icon={"./svg/next.svg"}></TreeEntry>
						<TreeEntry title="package.json" icon={"./svg/nodejs.svg"}></TreeEntry>
						<TreeEntry title="README.md" icon={"./svg/readme.svg"}></TreeEntry>
						<TreeEntry title="yarn.lock" icon={"./svg/yarn.svg"}></TreeEntry>
					</TreeEntry>
				</div>
				<div className=" bottom-0 left-0 w-full flex flex-col-reverse">
					<div className="w-full h-fit border-y-2 bg-dark-gray border-light-gray px-5">
						<div className="flex items-center">
							<img
								src="./svg/arrow.svg"
								width={20}
								height={20}
								alt=">"
								className="mr-2 -rotate-90"
							/>
							<h3 className="uppercase text-sm py-1 text-white">timeline</h3>
						</div>
					</div>
					<div className="w-full h-fit border-t-2 bg-dark-gray border-light-gray px-5">
						<div className="flex items-center">
							<img
								src="./svg/arrow.svg"
								width={20}
								height={20}
								alt=">"
								className="mr-2 -rotate-90"
							/>
							<h3 className="uppercase text-sm py-1 text-white">outline</h3>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}
