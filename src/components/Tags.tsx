import { tags } from "../constants//tags"

export default function Tags() {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 mt-3 ml-3">
      {tags.map((tag) => (
        <span className="px-2 py-1 bg-white border-1 border-transparent font-semibold text-black rounded-md cursor-pointer transition-colors duration-500 hover:bg-black hover:text-white hover:border-white ">
          {tag}
        </span>
      ))}
    </div>
  )
}
