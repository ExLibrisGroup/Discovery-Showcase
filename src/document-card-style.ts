import {css} from 'lit';

export const styles = css`
    :host {
        --title-font-color: inherit;
        --title-font-weight: 700;
        --title-font-size: 13px;

        --description-font-color: inherit;
        --description-font-weight: 400;
        --description-font-size: 12px;
    
        --image-height: 210px;
    }

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

    .record-details h3 {
        color: var(--title-font-color);
        font-size: var(--title-font-size);
        font-weight: var(--title-font-weight);
    }

    .record-details span {
        font-size: var(--description-font-size);
        font-weight: var(--description-font-weight);
        color: var(--description-font-color);
    }

    img {
        height: var(--image-height);
        display: block;
        object-fit: contain;
    }

    .image-placeHolder {
        height: var(--image-height);
        display: block;
        object-fit: contain;
        z-index: 1;
        opacity: 0.5;
    }
`;

