"use client";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import clsx from "clsx";
import { Category } from "../../sanity.types";

interface CategorySelectorProps {
  categories: Category[];
}

export function CategorySelectorComponent({
  categories,
}: CategorySelectorProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  // Memoize filtered categories to optimize performance
  const filteredCategories = useMemo(
    () =>
      categories.filter((category) =>
        category.title?.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [categories, searchValue]
  );

  // Handle category selection
  const handleSelect = (category: Category) => {
    if (category._id && category.slug?.current) {
      setSelectedCategoryId(category._id);
      router.push(`/categories/${category.slug.current}`);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-activedescendant={selectedCategoryId}
          className="w-full max-w-full relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {selectedCategoryId
            ? categories.find((category) => category._id === selectedCategoryId)
                ?.title
            : "Filter by Category"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search category..."
            className="h-9"
            value={searchValue}
            onValueChange={setSearchValue}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filteredCategories.length > 0) {
                handleSelect(filteredCategories[0]);
              }
            }}
          />
          <CommandList role="listbox">
            <CommandGroup>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <CommandItem
                    key={category._id}
                    value={category.title}
                    role="option"
                    aria-selected={selectedCategoryId === category._id}
                    onSelect={() => handleSelect(category)}
                  >
                    {category.title}
                    <Check
                      className={clsx(
                        "ml-auto h-4 w-4",
                        selectedCategoryId === category._id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))
              ) : (
                <CommandEmpty>No category found.</CommandEmpty>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}


// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
// import { Button } from "./ui/button";
// import { Check, ChevronsUpDown } from "lucide-react";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "./ui/command";
// import clsx from "clsx"; // Import clsx for conditional class names
// import { Category } from "../../sanity.types";

// interface CategorySelectorProps {
//   categories: Category[];
// }

// export function CategorySelectorComponent({
//   categories,
// }: CategorySelectorProps) {
//   const [open, setOpen] = useState<boolean>(false);
//   const [value, setValue] = useState<string>("");
//   const [searchValue, setSearchValue] = useState<string>(""); // State for the search input
//   const router = useRouter();

//   const filteredCategories = categories.filter((category) =>
//     category.title?.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant={"outline"}
//           role="combobox"
//           aria-expanded={open}
//           className="w-full max-w-full relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded"
//         >
//           {value
//             ? categories.find((category) => category._id === value)?.title
//             : "Filter by Category"}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
//         </Button>
//       </PopoverTrigger>

//       <PopoverContent className="w-full p-0">
//         <Command>
//           <CommandInput
//             placeholder="Search category..."
//             className="h-9"
//             value={searchValue} // Bind to state
//             onValueChange={(value) => setSearchValue(value)} // Use the correct event handler
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 const selectedCategory = categories.find((c) =>
//                   c.title?.toLowerCase().includes(searchValue.toLowerCase())
//                 );
//                 if (selectedCategory?.slug?.current) {
//                   setValue(selectedCategory._id);
//                   router.push(`/categories/${selectedCategory.slug.current}`);
//                   setOpen(false);
//                 }
//               }
//             }}
//           />
//           <CommandList>
//             <CommandGroup>
//               {filteredCategories.length > 0 ? (
//                 filteredCategories.map((category) => (
//                   <CommandItem
//                     key={category._id}
//                     value={category.title}
//                     onSelect={() => {
//                       setValue(category._id);
//                       router.push(`/categories/${category.slug?.current}`);
//                       setOpen(false);
//                     }}
//                   >
//                     {category.title}
//                     <Check
//                       className={clsx(
//                         "ml-auto h-4 w-4",
//                         value === category._id ? "opacity-100" : "opacity-0"
//                       )}
//                     />
//                   </CommandItem>
//                 ))
//               ) : (
//                 <CommandEmpty>No category found.</CommandEmpty>
//               )}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }
