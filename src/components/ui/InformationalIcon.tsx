import {
    AcademicCapIcon,
    CodeBracketIcon,
    CurrencyDollarIcon,
    GiftIcon,
    UserGroupIcon,
} from "@heroicons/react/16/solid";
import type { PropsWithChildren } from "react";
import AnimatedLine from "./AniamtedLine";
const iconClass = "fill-accent-1 h-28";

export const Icons = {
    DOLLAR: <CurrencyDollarIcon className={iconClass} />,
    PEOPLE: <UserGroupIcon className={iconClass} />,
    STUDENT: <AcademicCapIcon className={iconClass} />,
    GIFT: <GiftIcon className={iconClass} />,
    DEVELOPER: <CodeBracketIcon className={iconClass} />,
};

type IconKey = keyof typeof Icons;

interface Props {
    title: string;
    icon: IconKey;
}

export default function InformationalIcon({ title, icon, children }: PropsWithChildren<Props>) {
    return (
        <div className="flex flex-col w-[25%] items-center px-6">
            {Icons[icon]}
            <h2 className="text-4xl text-center font-display text-accent-1 w-[75%]">{title}</h2>
            <AnimatedLine className="border-t-2 border-accent-2 my-4" />
            <p className="text-content-1 font-display text-center text-lg">{children}</p>
        </div>
    );
}
