import React, { Suspense } from "react";
import styled from "styled-components";
import { Menu, docs } from "docs";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import useQueryString from "ui-toolkit/hooks/useQueryString";
import { MDXProvider } from "@mdx-js/react";
import { PortalsThemeProvider } from "ui-toolkit/components/PortalsThemeProvider/PortalsThemeProvider";
import CodeBlock from "docs/CodeBlock/CodeBlock";

const components = {
  pre: CodeBlock,
  code: CodeBlock,
  h2: ({ children }) => <h2 style={{ marginTop: "80px" }}>{children}</h2>,
};

function App({ theme }) {
  let [active, setActive] = useQueryString("active", "Home");
  let target = docs.find((d) => d.title === active);
  return (
    <Fabric>
      <PortalsThemeProvider theme={theme}>
        <StyledLayout className="app">
          <div className="header">
            <h1>PortalsDev UI Toolkit</h1>
          </div>
          <div className="side-menu">
            <Menu setActive={setActive} active={active} />
          </div>
          <div className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <MDXProvider components={components}>{target && target.render()}</MDXProvider>
            </Suspense>
          </div>
        </StyledLayout>
        <style>{`body { margin: 0; height: 100vh}`}</style>
      </PortalsThemeProvider>
    </Fabric>
  );
}

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  gap: 1px 1px;
  grid-template-areas: "header header" "side-menu content";

  code {
    color: #bd7a27;
  }
  .side-menu {
    grid-area: side-menu;
    border-right: 1px solid #eee;
    padding: 0 0 0 15px;
  }

  .content {
    grid-area: content;
    padding: 0 20px 50px;
    max-width: 1100px;
  }
  blockquote {
    margin-left: 10px;
    padding: 1px 10px;
    margin: 0;
    border-left: 4px solid steelblue;
    background: #f1f7fb;
  }

  .header {
    grid-area: header;
    background: steelblue;
    color: whitesmoke;
    padding: 10px;
    h1 {
      margin: 0;
      display: inline-block;
      font-weight: 100;
    }
  }
  @media (max-width: 600px) {
    display: block;
  }
`;
export default App;
