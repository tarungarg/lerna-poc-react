import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'amw-carousal',
  shadow: true,
})
export class Carousal {
  @Prop() elId: string;

  @Prop() elClass: string;

  render() {
    return <div class="">Carousal</div>;
  }
}
