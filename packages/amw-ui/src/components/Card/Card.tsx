import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'amw-card',
  shadow: true,
})
export class Card {
  @Prop() elId: string;

  @Prop() elClass: string;

  render() {
    return <div class="">Card</div>;
  }
}
