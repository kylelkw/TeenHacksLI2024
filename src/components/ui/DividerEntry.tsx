import { UserGroupIcon, CodeBracketIcon, AcademicCapIcon, GiftIcon, BanknotesIcon } from "@heroicons/react/16/solid";

const iconClass = "fill-content-3 h-[85%]";
const Icons = {
    Code: <CodeBracketIcon className={iconClass} />,
    UserPlus: <UserGroupIcon className={iconClass} />,
    School: <AcademicCapIcon className={iconClass} />,
    Gift: <GiftIcon className={iconClass} />,
    Banknotes: <BanknotesIcon className={iconClass} />,
};

interface Props {
    text: string;
    icon: keyof typeof Icons;
}

export default function DividerEntry({ text, icon }: Props) {
    const iconComponent = Icons[icon];

    return (
        <div className="flex h-[75%] items-center space-x-4">
            <div className="h-[70%] aspect-square bg-content-1 rounded-lg flex items-center justify-center">
                {iconComponent}
            </div>
            <h1 className="text-content-1 font-display font-semibold text-3xl">{text}</h1>
        </div>
    );
}
