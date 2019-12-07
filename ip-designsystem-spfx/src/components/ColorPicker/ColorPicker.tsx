import React from "react";

import { ColorPicker as FabricColorPicker } from "office-ui-fabric-react/lib/ColorPicker";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Callout, DirectionalHint } from "office-ui-fabric-react/lib/Callout";
import styled from "styled-components";
export default class ColorPicker extends React.PureComponent<ColorPickerProps, ColorPickerState> {
  elem: HTMLDivElement;
  state = {
    pickerVisible: false,
  };
  renderPicker = () => {
    if (!this.state.pickerVisible) return null;
    return (
      <Callout
        gapSpace={0}
        target={this.elem}
        setInitialFocus={true}
        directionalHint={DirectionalHint.topCenter}
        coverTarget={true}
        isBeakVisible={false}
        onDismiss={() => this.setState({ pickerVisible: false })}
      >
        <FabricColorPicker color={this.getColor()} onColorChanged={this.props.onChange} />
      </Callout>
    );
  };
  getColor = () => {
    return this.props.value || "blue";
  };
  openPicker = () => {
    this.setState({ pickerVisible: true });
  };
  render() {
    let cssClass = ["colorPicker", this.props.className].filter((c) => c).join(" ");
    return (
      <StyledContainer ref={(el) => (this.elem = el)} className={cssClass}>
        {this.props.label && <div className={"label"}>{this.props.label}</div>}
        <div className={"inputGrouping"}>
          <TextField value={this.getColor()} onChanged={this.props.onChange} />
          <span
            className={"square"}
            style={{ background: this.getColor() }}
            onClick={this.openPicker}
          />
        </div>
        {this.renderPicker()}
      </StyledContainer>
    );
  }
}

export interface ColorPickerState {
  pickerVisible: boolean;
}
export interface ColorPickerProps {
  value: string;
  onChange: (newColor: string) => void;
  label?: string;
  className?: string;
}

const StyledContainer = styled.div`
  margin: 5px 0;
  .inputGrouping {
    position: relative;
  }
  .label {
    position: relative;
  }
  .square {
    position: absolute;
    right: 4px;
    top: 4px;
    width: 22px;
    height: 22px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: inline-block;
    cursor: pointer;
    transition: all 0.15s ease-out;
  }
  .square:hover {
    transform: scale(1.15, 1.15);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.35);
  }
`;
