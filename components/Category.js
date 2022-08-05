import Image from "next/image"
import useShop from "../hooks/useShop";

const Category = ({ category }) => {

    const { name, icon, id } = category;

    const { handleClickCategory, categorySelected } = useShop()

    return (
        <div className={`${categorySelected?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
            <Image
                width={70}
                height={70}
                src={`/assets/img/icono_${icon}.svg`}
                alt="Icon Image"
                className="mr-5"
            />
            <button
                type="button"
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => handleClickCategory(id)}
            >
                {name}
            </button>
        </div>
    );
}

export default Category;
