import React from "react";
import { storiesOf } from "@storybook/react";
import { componentsByType } from "./components";
import Link from "@mui/material/Link";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";

componentsByType.forEach((type) => {
  const stories = storiesOf("Mui Components/" + type.title, () => <></>);
  stories.addParameters({
    docs: {
      page: (args) => (
        <>
          <Stories includePrimary={true} title={<Title />} />
        </>
      ),
    },
  });

  type.components.forEach(({ id, title, component, docs }) => {
    const Component = component;
    stories.add(title, (args) => <Component {...args} />, {
      docs: {
        description: {
          story: `Follow the link to see the full Material UI component documentation of [${title}](${docs}).`,
        },
      },
    });
  });
});
