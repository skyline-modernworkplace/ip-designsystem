import * as React from "react";
import styles from "./SitePicker.module.scss";
import SiteChoiceGroup, { SiteChoiceType } from "./siteChoiceGroup";
import SiteUrlInput from "./SiteUrlInput";
import { getCurrentWebUrl as getCurrentSiteUrl } from "../../core/utils/sharepointUtils";

const checkIsThisSite = function(siteUrl, currentSiteUrl) {
  return !siteUrl || siteUrl.toLowerCase() === currentSiteUrl.toLowerCase();
};

export default class SitePicker extends React.Component<SitePickerProps, SitePickerState> {
  state = {
    siteChoice: checkIsThisSite(this.props.siteUrl, getCurrentSiteUrl())
      ? SiteChoiceType.ThisSite
      : SiteChoiceType.Other,
    urlIsValid: false,
  };
  onChange = (url: string, isValid: boolean) => {
    let siteUrl = null;
    if (isValid) {
      siteUrl = url;
      if (this.props.onChange) this.props.onChange(siteUrl);
    }
  };
  onChoiceGroupChange = (choiceKey: SiteChoiceType) => {
    this.setState({ siteChoice: choiceKey });
    if (choiceKey === SiteChoiceType.ThisSite) {
      this.props.onChange(getCurrentSiteUrl);
    }
  };
  render() {
    let siteChoice = this.state.siteChoice;

    return (
      <div className={styles.sitePicker}>
        <SiteChoiceGroup
          label={this.props.label}
          value={siteChoice}
          onChange={this.onChoiceGroupChange}
        />
        <SiteUrlInput
          disabled={siteChoice === SiteChoiceType.ThisSite}
          url={this.props.siteUrl}
          onChange={this.onChange}
          key={this.props.siteUrl + siteChoice}
        />
      </div>
    );
  }
}

export interface SitePickerProps {
  //props
  siteUrl: string;
  onChange: (newValue) => void;
  label: string;
}

export interface SitePickerState {
  urlIsValid: boolean;
  siteChoice: SiteChoiceType;
}
