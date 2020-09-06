import React from "react";

import HeaderSearch from "./HeaderSearch";

export default {
  title: "Example/HeaderSearch",
  component: HeaderSearch,
};

const Template = (args) => <HeaderSearch {...args} />;

export const DefaultHeaderSearch = Template.bind({});
DefaultHeaderSearch.args = {
  
};