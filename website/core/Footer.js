/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('access.html')}>Getting Started</a>
            <a href={this.docUrl('dependencies.html')}>Deployment Guide</a>
            <a href={this.docUrl('architecture.html')}>Architecture / Design</a>
          </div>
          <div>
            <h5>Questions</h5>
            <a href={this.docUrl('doc4.html')}>Help</a>
          </div>
          <div>
            <h5>Resources</h5>
            <a href={this.docUrl('doc5.html')}>Team</a>
            <a href="https://github.com/">GTel</a> 
            <a href="https://fullcalendar.io/">FullCalendar</a> 
            <a href="https://docusaurus.io/">Docusaurus</a>
            
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}
/* For reference if needed 
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
*/

module.exports = Footer;
