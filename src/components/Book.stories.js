import React from "react";

import Book from "./Book";

export default {
  title: "Example/Book",
  component: Book,
};

const Template = (args) => <Book {...args} />;

export const DefaultBook = Template.bind({});
DefaultBook.args = {
  book : {
       title : "Example title",
       description : "Lorem demo ...",
        coverUrl : "",
        image: "https://picsum.photos/200/300",
  },
};