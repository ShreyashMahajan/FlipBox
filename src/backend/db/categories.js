import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Web series",
    description:
      "A web series (also known as a web show) is a series of scripted or non-scripted online videos, generally in episodic form, released on the Internet, which first emerged in the late 1990s and became more prominent in the early 2000s",
  },
  {
    _id: uuid(),
    categoryName: "standup comedy",
    description:
      "Stand-up comedy is a comic style in which a comedian performs in front of a live audience, usually speaking directly to them",
  },
  {
    _id: uuid(),
    categoryName: "vlog",
    description:
      "A vlog is a set of videos that someone regularly posts on the internet in which they record their thoughts or experiences or talk about a subject",
  },
  {
    _id: uuid(),
    categoryName: "Songs",
    description:
      "A song is words sung to a tune.",
  },
  {
    _id: uuid(),
    categoryName: "ALL",
    description:
      "Show all categories present",
  },
 
];
