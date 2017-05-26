import React from "react";
import { Link } from "react-router";

export default class Lawyer_row extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { title, body, field_lawyer_email, field_lawyer_phone, field_lawyer_type, field_related_practice, field_related_industry, field_related_region, field_lawyer_image, nid } = this.props;

    const url = '/lawyer/' + nid;
    return (

        <div class="views-row views-row-1 views-row-odd views-row-first">
          <div class="lawyer-item">
            <div class="info-block">
              <div class="lawyer-photo" dangerouslySetInnerHTML={{__html: field_lawyer_image}}/>
              <div class="lawyer-personal-data">
                <div class="lawyer-name">
                  <Link to={{ pathname: url }}>{title}</Link>
                </div>
                <div class="lawyer-title">{field_lawyer_type}</div>
                <div class="lawyer-mail"><a href={field_lawyer_email}>{field_lawyer_email}</a></div>
                <div class="lawyer-card-social-links">
                  <span class="card-img"></span>
                  <a href="" class="card-text">vcard</a>
                  <span class="ln-link"></span>
                  <span class="tw-link"></span>
                  <div class="related-offices"><div class="item-list"><ul><li class="first last">Washington, DC: <span>{field_lawyer_phone}</span></li>
                  </ul></div></div>
                </div>
              </div>
            </div>
            <div class="text-block">{body}</div>
            <div class="practices-block">
              <div class="practices-block-item"><span>Practices:</span> <a href="">{field_related_practice}</a></div>
              <div class="practices-block-item"><span>Industries:</span> <a href="">{field_related_industry}</a></div>
              <div class="practices-block-item"><span>Regions:</span> <a href="">{field_related_region}</a></div>
            </div>
          </div>
        </div>


    );
  }
}
