import type {FC} from "react";

type GenreBadgeTypeProps={
    name: string;
    id: number;
    onClick: (id: number) => void;
}

const GenreBadge:FC<GenreBadgeTypeProps> = ({ name,id,onClick }) => {

    return (
        <div className="
              px-3 py-1 bg-blue-100 text-blue-800 text-xl
              rounded-full shadow-sm hover:bg-blue-200 transition " onClick={() => onClick(id)}
        >
            {name}

    </div>

    );
};

export default GenreBadge;

