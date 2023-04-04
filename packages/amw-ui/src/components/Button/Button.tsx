import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'amw-button',
  shadow: true,
})
export class Button {
  @Prop() elId: string;

  @Prop() elClass: string;

  render() {
    return <div class="">Button</div>;
  }
}
