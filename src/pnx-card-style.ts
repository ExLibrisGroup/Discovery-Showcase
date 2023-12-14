import {css} from 'lit';

export const styles = css`
  a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
  }
  .record-details {
    text-align: center;
    color: black;
    margin-top: .5em;
  }
  .record-details h2 {
    font-size: 13px;
    font-weight: 700;
  }
  .record-details span {
    font-size: 12px;
    font-weight: 400;
    color: #5a5a5a;
  }
  
   img, .image-place-holder {
     display: block;
     max-height: 210px;
     object-fit: contain;
  }
`;

