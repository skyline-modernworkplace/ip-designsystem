import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import Persona from "ui-toolkit/components/Persona/Persona";
import Card from "ui-toolkit/components/Card/Card";
import Grid from "ui-toolkit/components/Grid/Grid";
import PropsTable from "./PropsTable";

let documentation: ComponentDocumentation = {
  title: "Persona",
  id: "Persona",
  description: (
    <>
      <p>
        Displays a user with a photo and title, can be configured to show subtitle and information
        as well as a call to action button.
      </p>
      <PropsTable
        props={[
          {
            name: "photo",
            isRequired: true,
            type: "String",
            description: "Renders a circle image",
          },
          {
            name: "title",
            isRequired: true,
            type: "String",
            description: "This is the primary text, usually used for a users name.",
          },
          {
            name: "subTitle",
            isRequired: false,
            type: "String",
            description: "This is secondary text, slightly lighter in focus and size than title.",
          },
          {
            name: "info",
            isRequired: false,
            type: "String",
            description: "This is secondary text, slightly smaller in size than subTitle.",
          },
          {
            name: "linkUrl",
            isRequired: false,
            type: "String",
            description:
              "If provided this will wrap the persona in a link that will open the linkUrl provided in a new tab. If there is also a call to action provided, a button will render in the Persona instead of the whole Persona being clickable.",
          },
          {
            name: "callToAction",
            isRequired: false,
            type: "String",
            description:
              "This will render a button with the provided text below the title if and only if a linkUrl is provided.",
          },
          {
            name: "orientation",
            isRequired: false,
            type: "horizontal | vertical",
            description:
              "Defaults to horizontal, this changes the items orientation to render the details below the photo, 'vertical' or beside it.",
          },
          {
            name: "photoSize",
            isRequired: false,
            type: "String",
            description:
              "Defaults to 100px, this sets the height and width of the photo to be the same height to maintain the correct aspect ratio",
          },
          {
            name: "className",
            isRequired: false,
            type: "string",
            description: "If you want to tack on your own class name.",
          },
          {
            name: "style",
            isRequired: false,
            type: "Object",
            description: "A styles object you can pass in to add inline styles.",
          },
        ]}
      />
    </>
  ),
  demos: [
    {
      title: "Basic Usage",
      slug: "basic-usage",
      description: "",
      scope: { Persona, Card },
      code: `<Persona 
    photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Will Spiering"
    subTitle="Software Engineer"
    info="Modern Workplace"
    callToAction="Learn More"
    linkUrl="https://wikipedia.com"
/>`,
    },
    {
      title: "Persona Card",
      slug: "inside-card",
      description:
        "To render the persona as a Card, use the 'as' prop and pass the 'Card' component",
      scope: { Persona, Card },
      code: `<Persona 
      photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      title="Will Spiering"
      subTitle="Software Engineer | Modern Workplace"
      info="wspiering@skylinetechnologies.com"
      callToAction="Learn More"
      linkUrl="https://wikipedia.com"
      as={Card}
  />`,
    },
    {
      title: "Item Orientation",
      slug: "item-orientation",
      description: "",
      scope: { Persona, Card },
      code: `()=> {
let [orientation, setOrientation] = React.useState("horizontal");

return (
    <>
    <div style={{width: "100%"}}>
        <input
        type="radio"
        id="horizontal"
        name="horizontal"
        value="horizontal"
        checked={orientation === "horizontal"}
        onChange={e => setOrientation(e.currentTarget.value)}
        />
        <label htmlFor="horizontal">Horizontal</label>
        <br />
        <input
        type="radio"
        id="vertical"
        name="vertical"
        value="vertical"
        checked={orientation === "vertical"}
        onChange={e => setOrientation(e.currentTarget.value)}
        />
        <label htmlFor="vertical">Vertical</label>
        <br />
    </div>
      <Persona
          orientation={orientation}
          photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Will Spiering"
          subTitle="Software Engineer"
          info="Modern Workplace"
          callToAction="Learn More"
          linkUrl="https://wikipedia.com"
      />
    </>
);
}
`,
    },
    {
      title: "No Info",
      slug: "no-info",
      description: "",
      scope: { Persona, Card },
      code: `<Persona 
    photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Will Spiering"
    subTitle="Software Engineer"
    callToAction="Learn More"
    linkUrl="https://wikipedia.com"
/>`,
    },
    {
      title: "No Subtitle",
      slug: "no-subtitle",
      description: "",
      scope: { Persona, Card },
      code: `<Persona 
    photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Will Spiering"
    callToAction="Learn More"
    linkUrl="https://wikipedia.com"
/>`,
    },
    {
      title: "No Call to Action",
      slug: "no-call-to-action",
      description: "",
      scope: { Persona, Card },
      code: `<Persona 
    photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Will Spiering"
    subTitle="Software Engineer"
    linkUrl="https://wikipedia.com"
/>`,
    },
    {
      title: "Inside Grid",
      slug: "inside-grid",
      description: "",
      scope: { Persona, Grid, Card },
      code: `<Grid size="250px">
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        linkUrl="https://wikipedia.com"
    />
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        linkUrl="https://wikipedia.com"
    />
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        linkUrl="https://wikipedia.com"
    />
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        linkUrl="https://wikipedia.com"
    />
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        linkUrl="https://wikipedia.com"
    />
    <Persona 
        photo="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Will Spiering"
        subTitle="Software Engineer"
        linkUrl="https://wikipedia.com"
    />
</Grid>`,
    },
  ],
};

export default documentation;
