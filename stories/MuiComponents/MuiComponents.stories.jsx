import React from "react";
import { storiesOf } from "@storybook/react";
import { componentsByType } from "./components";
import Link from "@mui/material/Link";

componentsByType.forEach((type) => {
  const stories = storiesOf("Mui Components/" + type.title, () => <></>);

  type.components.forEach(({ id, title, component, docs }) => {
    const Component = component;
    stories.add(title, (args) => (
      <>
        <Component {...args} />
        <br />
        <br />
        See{" "}
        <Link href={docs} target="_blank">
          {docs}
        </Link>{" "}
        for the full mui {title} documentation.
        <br />
        <br />
      </>
    ));
  });
});
