import { NewsCardInterfaces } from "@/interfaces/news-card-types";
import { AiFillProfile as Profile, AiOutlineFieldTime as Time, AiOutlineQuestionCircle as QuestionMark } from "react-icons/ai";
import {BiMoneyWithdraw as Money} from 'react-icons/bi'

export const NewsCardDatas: NewsCardInterfaces[] = [
  {
    title: "Easy Accessable",
    subtitle:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    icon: Profile,
  },
  {
    title: "Flexible Study Time",
    subtitle:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    icon: Time,
  },
  {
    title: "More Affordable Cost",
    subtitle:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    icon: Money,
  },
  {
    title: "Consultation With Mentor",
    subtitle:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    icon: QuestionMark,
  },
];
