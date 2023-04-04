/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AmwButton {
        "elClass": string;
        "elId": string;
    }
    interface AmwCard {
        "elClass": string;
        "elId": string;
    }
    interface AmwCarousal {
        "elClass": string;
        "elId": string;
    }
}
declare global {
    interface HTMLAmwButtonElement extends Components.AmwButton, HTMLStencilElement {
    }
    var HTMLAmwButtonElement: {
        prototype: HTMLAmwButtonElement;
        new (): HTMLAmwButtonElement;
    };
    interface HTMLAmwCardElement extends Components.AmwCard, HTMLStencilElement {
    }
    var HTMLAmwCardElement: {
        prototype: HTMLAmwCardElement;
        new (): HTMLAmwCardElement;
    };
    interface HTMLAmwCarousalElement extends Components.AmwCarousal, HTMLStencilElement {
    }
    var HTMLAmwCarousalElement: {
        prototype: HTMLAmwCarousalElement;
        new (): HTMLAmwCarousalElement;
    };
    interface HTMLElementTagNameMap {
        "amw-button": HTMLAmwButtonElement;
        "amw-card": HTMLAmwCardElement;
        "amw-carousal": HTMLAmwCarousalElement;
    }
}
declare namespace LocalJSX {
    interface AmwButton {
        "elClass"?: string;
        "elId"?: string;
    }
    interface AmwCard {
        "elClass"?: string;
        "elId"?: string;
    }
    interface AmwCarousal {
        "elClass"?: string;
        "elId"?: string;
    }
    interface IntrinsicElements {
        "amw-button": AmwButton;
        "amw-card": AmwCard;
        "amw-carousal": AmwCarousal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "amw-button": LocalJSX.AmwButton & JSXBase.HTMLAttributes<HTMLAmwButtonElement>;
            "amw-card": LocalJSX.AmwCard & JSXBase.HTMLAttributes<HTMLAmwCardElement>;
            "amw-carousal": LocalJSX.AmwCarousal & JSXBase.HTMLAttributes<HTMLAmwCarousalElement>;
        }
    }
}
